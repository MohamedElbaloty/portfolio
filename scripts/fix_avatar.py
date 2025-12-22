#!/usr/bin/env python3
"""
Script to fix avatar image - adjust left ear to match right ear
Requires: pip install Pillow
"""

from PIL import Image
import os
import sys

def fix_avatar(input_path, output_path=None):
    """
    Fix avatar by mirroring right ear to left ear
    """
    if output_path is None:
        output_path = input_path
    
    try:
        # Open the image
        img = Image.open(input_path)
        width, height = img.size
        
        # Calculate ear regions
        center_x = width // 2
        center_y = height // 2
        ear_width = int(width * 0.15)
        ear_height = int(height * 0.3)
        ear_y = int(center_y - ear_height // 2)
        
        # Right ear region (source)
        right_ear_x = int(width * 0.75)
        right_ear_y = ear_y
        
        # Left ear region (destination)
        left_ear_x = int(width * 0.1)
        left_ear_y = ear_y
        
        # Crop right ear
        right_ear_box = (right_ear_x, right_ear_y, 
                        right_ear_x + ear_width, right_ear_y + ear_height)
        right_ear = img.crop(right_ear_box)
        
        # Flip horizontally (mirror)
        right_ear_flipped = right_ear.transpose(Image.FLIP_LEFT_RIGHT)
        
        # Paste flipped ear to left side
        img.paste(right_ear_flipped, (left_ear_x, left_ear_y))
        
        # Save the image
        img.save(output_path, quality=95, optimize=True)
        print(f"✅ Avatar fixed successfully! Saved to: {output_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error fixing avatar: {e}")
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

