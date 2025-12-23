#!/usr/bin/env python3
"""
Generate thumbnails from animation videos for sub-projects
Requires: pip install opencv-python pillow
"""

import cv2
import os
import sys
from pathlib import Path

def extract_thumbnail(video_path, output_path, time_seconds=1.0, max_attempts=5):
    """
    Extract thumbnail from video at specified time
    Tries multiple times if first frame is black
    """
    if not os.path.exists(video_path):
        print(f"❌ Video not found: {video_path}")
        return False
    
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"❌ Cannot open video: {video_path}")
        return False
    
    # Get video properties
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = total_frames / fps if fps > 0 else 0
    
    # Try different times to avoid black frames
    times_to_try = []
    if duration > 0:
        # Try at 10%, 20%, 30%, 1 second, 2 seconds
        times_to_try = [
            min(duration * 0.1, 0.5),
            min(duration * 0.2, 1.0),
            min(duration * 0.3, 2.0),
            1.0,
            2.0
        ]
    else:
        times_to_try = [0.5, 1.0, 2.0, 3.0, 4.0]
    
    best_frame = None
    best_brightness = 0
    
    for attempt_time in times_to_try[:max_attempts]:
        frame_number = int(attempt_time * fps) if fps > 0 else int(attempt_time * 30)
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_number)
        ret, frame = cap.read()
        
        if ret and frame is not None:
            # Calculate brightness (average of all pixels)
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            brightness = gray.mean()
            
            # Skip if frame is too dark (likely black)
            if brightness > 30:  # Threshold for "not black"
                best_frame = frame
                best_brightness = brightness
                print(f"   ✓ Found good frame at {attempt_time:.1f}s (brightness: {brightness:.1f})")
                break
            elif brightness > best_brightness:
                best_frame = frame
                best_brightness = brightness
    
    cap.release()
    
    if best_frame is None:
        print(f"   ⚠️  All frames too dark, using first non-black frame")
        # Fallback: try to get any frame
        cap = cv2.VideoCapture(video_path)
        for i in range(0, min(100, total_frames), 5):
            cap.set(cv2.CAP_PROP_POS_FRAMES, i)
            ret, frame = cap.read()
            if ret and frame is not None:
                gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
                if gray.mean() > 10:  # Very low threshold
                    best_frame = frame
                    break
        cap.release()
    
    if best_frame is None:
        print(f"❌ Could not extract frame from: {video_path}")
        return False
    
    # Resize to standard thumbnail size (640x360 for 16:9)
    height, width = best_frame.shape[:2]
    aspect_ratio = width / height
    
    if aspect_ratio > 1.5:  # Wide video
        new_width = 640
        new_height = int(640 / aspect_ratio)
    else:  # Square or tall
        new_height = 360
        new_width = int(360 * aspect_ratio)
    
    resized = cv2.resize(best_frame, (new_width, new_height), interpolation=cv2.INTER_AREA)
    
    # Save thumbnail
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    cv2.imwrite(output_path, resized, [cv2.IMWRITE_JPEG_QUALITY, 85])
    
    print(f"✅ Thumbnail saved: {output_path}")
    return True

def generate_all_thumbnails():
    """Generate thumbnails for all animation sub-projects"""
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    public_dir = project_root / "public"
    thumbnails_dir = public_dir / "animationthumbnails"
    
    # Define sub-projects and their videos
    sub_projects = {
        "logo-animation": [
            "logo animation/1.mp4",
            "logo animation/2.mp4",
            "logo animation/3.mp4",
            "logo animation/4.mp4",
            "logo animation/5.mp4",
            "logo animation/6.mp4"
        ],
        "motion-graphics": [
            "2D3DAnimation/المنصة التطوعية.mp4",
            "2D3DAnimation/سابل.mp4",
            "2D3DAnimation/ملم.mp4",
            "2D3DAnimation/ناجز.mp4",
            "2D3DAnimation/هيئة كفاءة الانفاق.mp4",
            "2D3DAnimation/وزارة البلديات والاسكان.mp4",
            "2D3DAnimation/وزارة الطاقة.mp4",
            "2D3DAnimation/وزارة النقل والخدمات اللوجيستيه.mp4"
        ],
        "conference-motion": [
            "conferenceeventscreenmotion/classeraeventvideo.mp4",
            "conferenceeventscreenmotion/أبشر اعمال reel جناح وزارة الداخلية.mp4",
            "conferenceeventscreenmotion/اعلان مسابقة منقية.mp4",
            "conferenceeventscreenmotion/الشركة السعوديه للكهرباء.mp4",
            "conferenceeventscreenmotion/ايفنت الامن البيئي.mp4"
        ],
        "paper-animation": [
            "paperstyleanimation/اعلان سوشال ميديا شاورما جليلة.mp4",
            "paperstyleanimation/جمعية القران بالزلفى.mp4",
            "paperstyleanimation/هيئة فنون الطهي.mp4"
        ]
    }
    
    print("🎬 Generating animation thumbnails...\n")
    
    for sub_project_id, videos in sub_projects.items():
        print(f"\n📁 Processing: {sub_project_id}")
        
        # Get first video for thumbnail
        if videos:
            first_video = videos[0]
            video_path = public_dir / first_video
            
            # Create output filename
            video_name = Path(first_video).stem
            output_filename = f"{sub_project_id}.jpg"
            output_path = thumbnails_dir / output_filename
            
            print(f"   Video: {first_video}")
            if extract_thumbnail(str(video_path), str(output_path)):
                print(f"   ✅ Thumbnail: {output_filename}")
            else:
                print(f"   ❌ Failed to create thumbnail")
        else:
            print(f"   ⚠️  No videos found")
    
    print(f"\n✨ Done! Thumbnails saved to: {thumbnails_dir}")

if __name__ == "__main__":
    try:
        generate_all_thumbnails()
    except ImportError:
        print("❌ Error: Required packages not installed")
        print("   Install with: pip install opencv-python pillow")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

