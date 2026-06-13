import fs from 'fs';
import path from 'path';

const sourceDir = './projects';
const destDir = './public/projects';

// Ensure destination dir exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy all image files
const files = fs.readdirSync(sourceDir);
files.forEach(file => {
  if (file.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    const src = path.join(sourceDir, file);
    const dest = path.join(destDir, file);
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${file}`);
  }
});

console.log('All images copied successfully!');
