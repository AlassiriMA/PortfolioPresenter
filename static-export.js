import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const inputDir = path.join(__dirname, 'dist', 'public');
const outputDir = path.join(__dirname, 'static-export');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create .nojekyll file
fs.writeFileSync(path.join(outputDir, '.nojekyll'), '');

// Copy all files from the public directory
function copyDirectory(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Create 404.html for GitHub Pages
function create404Page() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found | Mohammad A. Alassiri</title>
  <meta http-equiv="refresh" content="0;url=/" />
  <style>
    body {
      font-family: system-ui, sans-serif;
      background: #f8f9fa;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      text-align: center;
    }
    .container {
      max-width: 500px;
      padding: 2rem;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1.5rem;
    }
    a {
      color: #10b981;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Page Not Found</h1>
    <p>The page you are looking for doesn't exist or has been moved.</p>
    <p>Redirecting to the <a href="/">home page</a>...</p>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(outputDir, '404.html'), html);
}

// Main execution
try {
  console.log('Creating static export...');
  copyDirectory(inputDir, outputDir);
  create404Page();
  console.log('Static export created successfully at', outputDir);
} catch (error) {
  console.error('Error creating static export:', error);
  process.exit(1);
}