#!/usr/bin/env python3
"""
Script to fix avatar image - adjust left ear to match right ear
Requires: pip install Pillow
"""

from PIL import Image
import os
import sys

def fix_avatar(input_path, output_path=None, backup=True):
    """
    Fix avatar by mirroring right ear to left ear with better precision
    """
    if output_path is None:
        output_path = input_path
    
    try:
        # Create backup if needed
        if backup and output_path == input_path:
            backup_path = input_path.replace('.jfif', '_backup.jfif').replace('.jpg', '_backup.jpg').replace('.png', '_backup.png')
            img_backup = Image.open(input_path)
            img_backup.save(backup_path, quality=95)
            print(f"📦 Backup created: {backup_path}")
        
        # Open the image
        img = Image.open(input_path)
        width, height = img.size
        print(f"📐 Image size: {width}x{height}")
        
        # Convert to RGB if needed (for JFIF/JPEG)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Calculate ear regions more precisely
        # For portrait photos, ears are typically at:
        # - Right ear: 70-85% from left, 30-50% from top
        # - Left ear: 10-25% from left, 30-50% from top
        
        # Right ear region (source) - more precise
        right_ear_x = int(width * 0.70)
        right_ear_y = int(height * 0.30)
        right_ear_width = int(width * 0.18)
        right_ear_height = int(height * 0.25)
        
        # Left ear region (destination)
        left_ear_x = int(width * 0.10)
        left_ear_y = int(height * 0.30)
        left_ear_width = right_ear_width
        left_ear_height = right_ear_height
        
        print(f"👂 Right ear region: ({right_ear_x}, {right_ear_y}, {right_ear_width}x{right_ear_height})")
        print(f"👂 Left ear region: ({left_ear_x}, {left_ear_y}, {left_ear_width}x{left_ear_height})")
        
        # Crop right ear with better boundaries
        right_ear_box = (
            max(0, right_ear_x),
            max(0, right_ear_y),
            min(width, right_ear_x + right_ear_width),
            min(height, right_ear_y + right_ear_height)
        )
        right_ear = img.crop(right_ear_box)
        
        # Resize if needed to match exactly
        if right_ear.size != (left_ear_width, left_ear_height):
            right_ear = right_ear.resize((left_ear_width, left_ear_height), Image.Resampling.LANCZOS)
        
        # Flip horizontally (mirror) to create left ear
        right_ear_flipped = right_ear.transpose(Image.FLIP_LEFT_RIGHT)
        
        # Create a mask for smooth blending (optional - for better blending)
        # For now, direct paste should work
        
        # Paste flipped ear to left side
        img.paste(right_ear_flipped, (
            max(0, left_ear_x),
            max(0, left_ear_y)
        ))
        
        # Save the image with high quality
        if output_path.endswith('.jfif') or output_path.endswith('.jpg') or output_path.endswith('.jpeg'):
            img.save(output_path, 'JPEG', quality=95, optimize=True)
        else:
            img.save(output_path, quality=95, optimize=True)
        
        print(f"✅ Avatar fixed successfully! Saved to: {output_path}")
        print(f"💡 Tip: Check the result and adjust coordinates if needed")
        return True
        
    except Exception as e:
        print(f"❌ Error fixing avatar: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    # Default paths
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    default_input = os.path.join(project_root, "public", "avatar.jfif")
    default_output = default_input
    
    if len(sys.argv) > 1:
        input_path = sys.argv[1]
    else:
        input_path = default_input
    
    if len(sys.argv) > 2:
        output_path = sys.argv[2]
    else:
        output_path = default_output
    
    if not os.path.exists(input_path):
        print(f"❌ Error: Image not found at {input_path}")
        print(f"Usage: python fix_avatar.py [input_path] [output_path]")
        sys.exit(1)
    
    fix_avatar(input_path, output_path)

