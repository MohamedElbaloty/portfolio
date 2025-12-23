# Animation Thumbnails

This folder contains thumbnails for animation sub-projects.

## How to Generate Thumbnails

### Option 1: Using Browser Tool (Recommended)
1. Open `scripts/generate_thumbnails_browser.html` in your browser
2. Click "Generate All Thumbnails"
3. Download the generated thumbnails
4. Save them in this folder with the correct names:
   - `logo-animation.jpg`
   - `motion-graphics.jpg`
   - `conference-motion.jpg`
   - `paper-animation.jpg`

### Option 2: Using Python Script
1. Install required packages: `pip install opencv-python pillow`
2. Run: `python scripts/generate_animation_thumbnails.py`
3. Thumbnails will be automatically saved in this folder

### Option 3: Manual Extraction
Use any video editing tool or online service to extract a frame from the first video of each sub-project and save as JPG.

## Required Files
- `logo-animation.jpg` - Thumbnail for Logo Animation sub-project
- `motion-graphics.jpg` - Thumbnail for 2.5D & 3D Motion Graphics sub-project (make sure it's not black!)
- `conference-motion.jpg` - Thumbnail for Conference & Event Screen Motion sub-project
- `paper-animation.jpg` - Thumbnail for Paper Style Animation sub-project

## Note
The thumbnails should be extracted from the first video in each sub-project's video list. For `motion-graphics`, try extracting from a later time in the video (2-3 seconds) to avoid black frames.

