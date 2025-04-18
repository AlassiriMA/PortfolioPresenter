#!/usr/bin/env node

/**
 * Static site generator for the portfolio website
 * This script prepares a production-ready static build version of the site,
 * which can be deployed to GitHub Pages or any static hosting service.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const outputDir = path.join(__dirname, 'static-build');
const sourceBuildDir = path.join(__dirname, 'dist', 'public');

// Function to execute shell commands
function execCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
      }
      resolve(stdout);
    });
  });
}

// Build the project
async function buildProject() {
  console.log('🔧 Building the project for production...');
  try {
    await execCommand('npm run build');
    console.log('✅ Build completed successfully');
    return true;
  } catch (error) {
    console.error('❌ Build failed:', error);
    return false;
  }
}

// Create output directory
function createOutputDir() {
  console.log(`📁 Creating output directory at ${outputDir}`);
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });
}

// Copy built files
function copyBuiltFiles() {
  console.log(`📋 Copying built files from ${sourceBuildDir} to ${outputDir}`);
  if (!fs.existsSync(sourceBuildDir)) {
    throw new Error(`Source build directory ${sourceBuildDir} does not exist!`);
  }
  
  // Copy all files from the build directory to the output directory
  const entries = fs.readdirSync(sourceBuildDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(sourceBuildDir, entry.name);
    const destPath = path.join(outputDir, entry.name);
    
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      // Recursive copy of directories
      const copyDirRecursive = (src, dest) => {
        const dirEntries = fs.readdirSync(src, { withFileTypes: true });
        for (const dirEntry of dirEntries) {
          const srcFilePath = path.join(src, dirEntry.name);
          const destFilePath = path.join(dest, dirEntry.name);
          
          if (dirEntry.isDirectory()) {
            fs.mkdirSync(destFilePath, { recursive: true });
            copyDirRecursive(srcFilePath, destFilePath);
          } else {
            fs.copyFileSync(srcFilePath, destFilePath);
          }
        }
      };
      copyDirRecursive(srcPath, destPath);
    } else {
      // For HTML files, remove the Replit development banner
      if (entry.name.endsWith('.html')) {
        let content = fs.readFileSync(srcPath, 'utf8');
        // Remove the Replit development banner script
        content = content.replace(
          /<script.*?src="https:\/\/replit\.com\/public\/js\/replit-dev-banner\.js".*?><\/script>/g, 
          ''
        );
        fs.writeFileSync(destPath, content);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

// Create necessary GitHub Pages files
function createGitHubPagesFiles() {
  console.log('📝 Creating GitHub Pages specific files');
  
  // Create .nojekyll file to prevent Jekyll processing
  fs.writeFileSync(path.join(outputDir, '.nojekyll'), '');
  
  // Create a 404.html file
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

  fs.writeFileSync(path.join(outputDir, '404.html'), html404);
  
  // Create CNAME file if needed
  // fs.writeFileSync(path.join(outputDir, 'CNAME'), 'your-domain.com');
}

// Update Browserslist database
async function updateBrowserslist() {
  console.log('🔄 Updating Browserslist database...');
  try {
    await execCommand('npx update-browserslist-db@latest');
    console.log('✅ Browserslist database updated successfully');
    return true;
  } catch (error) {
    console.warn('⚠️ Failed to update Browserslist database, continuing anyway:', error);
    return false;
  }
}

// Main function
async function main() {
  console.log('🚀 Starting static site generation process');
  
  // Step 1: Update Browserslist database
  await updateBrowserslist();
  
  // Step 2: Build the project
  const buildSuccess = await buildProject();
  if (!buildSuccess) {
    console.error('❌ Stopping process due to build failure');
    process.exit(1);
  }
  
  // Step 3: Create output directory
  createOutputDir();
  
  // Step 4: Copy built files
  try {
    copyBuiltFiles();
  } catch (error) {
    console.error('❌ Error copying files:', error);
    process.exit(1);
  }
  
  // Step 5: Create GitHub Pages files
  createGitHubPagesFiles();
  
  // Done!
  console.log('\n✨ Static site generation completed successfully!');
  console.log(`The static site is available at: ${outputDir}`);
  console.log('\nTo deploy to GitHub Pages:');
  console.log('1. Initialize a git repository in the output directory');
  console.log('2. Push the contents to the gh-pages branch of your repository');
  console.log('\nOr use gh-pages package:');
  console.log('npx gh-pages -d static-build');
  
  console.log('\n📝 Next steps:');
  console.log('1. Verify the static build by opening index.html in a browser');
  console.log('2. Check all links and interactions work correctly');
  console.log('3. Test on multiple devices and browsers if possible');
}

// Run the main function
main().catch(error => {
  console.error('❌ An unexpected error occurred:', error);
  process.exit(1);
});