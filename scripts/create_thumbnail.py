#!/usr/bin/env python3
"""
Create a small thumbnail version of the avatar
Requires: pip install Pillow
"""

from PIL import Image
import os
import sys

def create_thumbnail(input_path, output_path=None, size=(80, 80)):
    """
    Create a small thumbnail version of the avatar
    """
    if output_path is None:
        base, ext = os.path.splitext(input_path)
        output_path = f"{base}_thumb{ext}"
    
    try:
        # Open the image
        img = Image.open(input_path)
        
        # Create thumbnail (maintains aspect ratio)
        img.thumbnail(size, Image.Resampling.LANCZOS)
        
        # Create a square image with the thumbnail centered
        thumb = Image.new('RGB', size, (10, 10, 10))  # Dark background
        x_offset = (size[0] - img.size[0]) // 2
        y_offset = (size[1] - img.size[1]) // 2
        thumb.paste(img, (x_offset, y_offset))
        
        # Save the thumbnail
        thumb.save(output_path, quality=95, optimize=True)
        print(f"✅ Thumbnail created successfully! Saved to: {output_path}")
        print(f"   Size: {thumb.size}")
        return True
        
    except Exception as e:
        print(f"❌ Error creating thumbnail: {e}")
        return False

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    default_input = os.path.join(project_root, "public", "avatar.jfif")
    
    if len(sys.argv) > 1:
        input_path = sys.argv[1]
    else:
        input_path = default_input
    
    if not os.path.exists(input_path):
        print(f"❌ Error: Image not found at {input_path}")
        print(f"Usage: python create_thumbnail.py [input_path] [output_path]")
        sys.exit(1)
    
    create_thumbnail(input_path)




