// Script to fix avatar image - adjust left ear to match right ear
// This script uses Canvas API to process the image

const fs = require('fs');
const path = require('path');

// Note: This is a Node.js script that requires canvas package
// Install with: npm install canvas

async function fixAvatar() {
  try {
    const { createCanvas, loadImage } = require('canvas');
    
    const imagePath = path.join(__dirname, '../public/avatar.jfif');
    const outputPath = path.join(__dirname, '../public/avatar.jfif');
    
    // Load the image
    const img = await loadImage(imagePath);
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    
    // Draw the original image
    ctx.drawImage(img, 0, 0);
    
    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // Calculate center and ear regions
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Mirror the right ear region to the left
    // This is a simplified approach - you may need to adjust coordinates
    const earWidth = canvas.width * 0.15; // Approximate ear width
    const earHeight = canvas.height * 0.3; // Approximate ear height
    const earY = centerY - earHeight / 2;
    
    // Right ear region (source)
    const rightEarX = canvas.width * 0.75;
    const rightEarY = earY;
    
    // Left ear region (destination)
    const leftEarX = canvas.width * 0.1;
    const leftEarY = earY;
    
    // Create temporary canvas for right ear
    const tempCanvas = createCanvas(earWidth, earHeight);
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(
      img,
      rightEarX, rightEarY, earWidth, earHeight,
      0, 0, earWidth, earHeight
    );
    
    // Flip horizontally
    tempCtx.scale(-1, 1);
    tempCtx.drawImage(tempCanvas, -earWidth, 0);
    
    // Draw flipped ear to left side
    ctx.drawImage(
      tempCanvas,
      leftEarX, leftEarY, earWidth, earHeight
    );
    
    // Save the processed image
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
    fs.writeFileSync(outputPath, buffer);
    
    console.log('Avatar fixed successfully!');
  } catch (error) {
    console.error('Error fixing avatar:', error);
    console.log('\nNote: This script requires the canvas package.');
    console.log('Install it with: npm install canvas');
  }
}

// Run if called directly
if (require.main === module) {
  fixAvatar();
}

module.exports = { fixAvatar };

