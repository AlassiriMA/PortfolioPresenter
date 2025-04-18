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

function prepareForGitHubPages() {
  console.log('\n================================');
  console.log('  GITHUB PAGES DEPLOYMENT GUIDE');
  console.log('================================\n');
  
  console.log('Follow these steps to deploy your portfolio to GitHub Pages:\n');
  
  console.log('1. Update your repository');
  console.log('   git add .');
  console.log('   git commit -m "Update website content"');
  console.log('   git push origin main\n');
  
  console.log('2. Run the deployment scripts');
  console.log('   bash deploy.sh');
  console.log('   OR run individual steps:');
  console.log('   npm run build');
  console.log('   node deploy-static.js');
  console.log('   npx gh-pages -d static-build\n');
  
  console.log('3. Check deployment status');
  console.log('   - Go to your GitHub repository');
  console.log('   - Click on "Actions" tab');
  console.log('   - Wait for the "pages build and deployment" workflow to complete\n');
  
  console.log('4. Visit your deployed site');
  console.log('   - GitHub Pages URL: https://[username].github.io/[repository-name]/');
  console.log('   - Or your custom domain if configured\n');
  
  console.log('5. For custom domain setup:');
  console.log('   - Uncomment the CNAME line in deploy-static.js');
  console.log('   - Add your domain in the CNAME file');
  console.log('   - Configure DNS settings with your domain provider\n');
  
  console.log('For more details, refer to DEPLOYMENT.md');
}

function showDeploymentInstructions() {
  console.log('\n= = = = = = = = = = = = = = = = = = = = = = = = = = = = = =');
  console.log('  Mohammad A. Alassiri - Portfolio Website Deployment');
  console.log('= = = = = = = = = = = = = = = = = = = = = = = = = = = = = =\n');
  
  console.log('To deploy the complete portfolio website to GitHub Pages:');
  console.log('1. Run the deploy.sh script: bash deploy.sh');
  console.log('2. The site will be available at your GitHub Pages URL\n');
  
  console.log('For more detailed instructions:');
  console.log('- Review DEPLOYMENT.md for complete deployment documentation');
  console.log('- Run node deploy-static.js for static site generation only');
}

// Execute functions
prepareForGitHubPages();
showDeploymentInstructions();