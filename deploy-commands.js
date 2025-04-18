#!/usr/bin/env node

/**
 * Deployment script for GitHub Pages
 *
 * Usage:
 * 1. First build the project: npm run build
 * 2. Run this script: node deploy-commands.js
 *
 * This script will:
 * 1. Prepare the build for GitHub Pages deployment
 * 2. Create necessary files like .nojekyll, 404.html
 * 3. Provide deployment commands
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'dist', 'public');

// Check if the build directory exists
if (!fs.existsSync(publicDir)) {
  console.error('\x1b[31m%s\x1b[0m', 'Error: Build directory not found!');
  console.log('Please run \x1b[33mnpm run build\x1b[0m first before deploying.');
  process.exit(1);
}

// Create necessary files for GitHub Pages
function prepareForGitHubPages() {
  console.log('\x1b[36m%s\x1b[0m', '📦 Preparing for GitHub Pages deployment...');
  
  // Create .nojekyll file to prevent Jekyll processing
  fs.writeFileSync(path.join(publicDir, '.nojekyll'), '');
  console.log('✅ Created .nojekyll file');
  
  // Create 404.html
  const html404 = `<!DOCTYPE html>
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

  fs.writeFileSync(path.join(publicDir, '404.html'), html404);
  console.log('✅ Created 404.html page');
  
  // Create CNAME file if you have a custom domain (commented out by default)
  // fs.writeFileSync(path.join(publicDir, 'CNAME'), 'your-custom-domain.com');
  // console.log('✅ Created CNAME file for custom domain');
}

// Display deployment instructions
function showDeploymentInstructions() {
  console.log('\n\x1b[32m%s\x1b[0m', '🚀 Ready for deployment!');
  console.log('\nYou can now deploy to GitHub Pages using one of these methods:');
  
  console.log('\n\x1b[33m%s\x1b[0m', '1. Using gh-pages package (recommended):');
  console.log('   npx gh-pages -d dist/public');
  
  console.log('\n\x1b[33m%s\x1b[0m', '2. Manual deployment:');
  console.log('   cd dist/public');
  console.log('   git init');
  console.log('   git add .');
  console.log('   git commit -m "Deploy to GitHub Pages"');
  console.log('   git branch -M gh-pages');
  console.log('   git remote add origin https://github.com/yourusername/your-repository.git');
  console.log('   git push -f origin gh-pages');
  
  console.log('\n\x1b[36m%s\x1b[0m', 'Once deployed, your site will be available at:');
  console.log('https://yourusername.github.io/your-repository/');
}

// Main execution
try {
  prepareForGitHubPages();
  showDeploymentInstructions();
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', 'Error preparing for deployment:', error);
  process.exit(1);
}