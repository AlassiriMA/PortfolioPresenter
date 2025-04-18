# Deployment Guide

This document provides detailed instructions for deploying the Mohammad A. Alassiri portfolio website to various hosting platforms, with a focus on GitHub Pages.

## Table of Contents

1. [GitHub Pages Deployment](#github-pages-deployment)
2. [Environment Preparation](#environment-preparation)
3. [Using the Deployment Scripts](#using-the-deployment-scripts)
4. [Custom Domain Configuration](#custom-domain-configuration)
5. [Troubleshooting](#troubleshooting)

## GitHub Pages Deployment

GitHub Pages is the recommended deployment platform for this portfolio site. It provides free hosting for static websites directly from a GitHub repository.

### Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js (v18+) and npm installed
- The `gh-pages` npm package (installed via `npm install -g gh-pages`)

### Steps for GitHub Pages Deployment

1. **Create a GitHub repository** (if you haven't already):
   - Name it according to your preference (e.g., `alassiri-portfolio`)
   - Make it public to use GitHub Pages for free

2. **Connect your local repository to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repository-name.git
   git push -u origin main
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Run the static site generator script**:
   ```bash
   node deploy-static.js
   ```
   This will create a `static-build` directory with all the necessary files for GitHub Pages.

5. **Deploy to GitHub Pages**:
   ```bash
   npx gh-pages -d static-build
   ```
   This will push the contents of the `static-build` directory to the `gh-pages` branch of your repository.

6. **Enable GitHub Pages** in your repository settings:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select the `gh-pages` branch
   - Click "Save"

7. **Wait for deployment** to complete (usually takes a few minutes)
   - GitHub will provide you with a URL for your site (e.g., `https://yourusername.github.io/your-repository-name/`)

## Environment Preparation

Before deploying, make sure your environment is properly configured:

1. **Update environment variables**:
   - Create a `.env` file for any environment-specific variables
   - Ensure all API keys and credentials are properly configured

2. **Test the production build locally**:
   ```bash
   npm run build
   npm run start
   ```

3. **Check for any console errors** or warnings in the browser developer tools

## Using the Deployment Scripts

This project includes two deployment scripts:

### 1. `deploy.sh` (Shell Script)

A simple shell script that builds the project and prepares it for GitHub Pages:

```bash
chmod +x deploy.sh  # Make it executable (first time only)
./deploy.sh
```

### 2. `deploy-static.js` (Node.js Script)

A more comprehensive Node.js script that handles the entire deployment process:

```bash
node deploy-static.js
```

This script performs the following actions:
- Builds the project for production
- Creates a `static-build` directory
- Copies all necessary files
- Creates GitHub Pages specific files (.nojekyll, 404.html)
- Provides deployment instructions

## Custom Domain Configuration

To use a custom domain with your GitHub Pages deployment:

1. **Update the CNAME file** in the `deploy-static.js` script:
   - Uncomment the CNAME creation line
   - Replace `your-domain.com` with your actual domain

2. **Configure DNS settings** with your domain provider:
   - For an apex domain (e.g., `example.com`), create A records pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - For a subdomain (e.g., `www.example.com`), create a CNAME record pointing to `yourusername.github.io`

3. **Update GitHub repository settings**:
   - Go to Settings > Pages
   - Enter your custom domain in the "Custom domain" field
   - Click "Save"
   - Check "Enforce HTTPS" for secure connections

## Troubleshooting

### Common Issues

1. **404 error after deployment**:
   - Make sure the GitHub Pages source is set to the correct branch
   - Check if the `index.html` file is in the root of the `gh-pages` branch

2. **Missing assets or broken links**:
   - Ensure all paths in the code are relative, not absolute
   - Verify that all assets are properly copied to the `static-build` directory

3. **Styling issues in production**:
   - Clear browser cache
   - Check for CSS minification issues

### Getting Help

If you encounter any issues with deployment:

1. Check the GitHub Pages documentation: https://docs.github.com/en/pages
2. Look at the repository issues section for similar problems
3. Consult the README for project-specific guidance

---

This deployment guide was last updated on April 18, 2024.