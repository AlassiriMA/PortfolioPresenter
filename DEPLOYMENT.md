# Deployment Guide for Portfolio Website

This document provides detailed instructions for deploying the portfolio website to GitHub Pages.

## Pre-Deployment Checklist

Before deploying, ensure the following:

1. All features are working as expected locally
2. The site is responsive across different device sizes
3. All links point to the correct URLs
4. SVG assets are properly loading 
5. Contact form is properly connected to Formspree

## Deployment to GitHub Pages

### Option 1: Using the Automatic Script

The easiest way to deploy is using the provided deployment script:

```bash
# Build and deploy the site
npm run deploy
```

This script will:
1. Build the site for production
2. Prepare all assets for GitHub Pages
3. Push the built files to the `gh-pages` branch
4. Deploy the site to GitHub Pages

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Prepare the build for GitHub Pages:
   ```bash
   node deploy-static.js
   ```

3. Deploy to GitHub Pages:
   ```bash
   # Initialize the gh-pages branch if it doesn't exist
   git checkout -b gh-pages

   # Force add the contents of the dist directory to the gh-pages branch
   git add -f dist

   # Commit the changes
   git commit -m "Deploy to GitHub Pages"

   # Push the gh-pages branch to GitHub
   git push -f origin gh-pages

   # Return to the main branch
   git checkout main
   ```

## Post-Deployment Verification

After deployment, verify:

1. The site is accessible at `https://alassirima.github.io/portfolio/` (or your custom domain)
2. All assets (images, CSS, JS) load correctly
3. Navigation works as expected
4. The contact form submits successfully

## Troubleshooting Common Issues

### Issue: Assets not loading

If assets aren't loading, check:
- Asset paths are relative, not absolute
- Path structure in the deployed version matches your local setup
- Check browser console for 404 errors on specific files

### Issue: Page Not Found errors when navigating

For single-page applications on GitHub Pages, ensure:
- You have a proper 404.html page redirect
- The site properly handles client-side routing
- Base path is correctly set in the router

### Issue: Form submissions not working

Check:
- Formspree is properly configured
- CORS settings are correct
- Form action URLs are correct

## Using a Custom Domain

To use a custom domain with GitHub Pages:

1. In your GitHub repository, go to Settings > Pages
2. Under "Custom domain", enter your domain name (e.g., alassiri.nl)
3. Create or update DNS records with your domain registrar:
   - Create an A record pointing to GitHub Pages IPs
   - Or create a CNAME record pointing to your GitHub Pages URL
4. Add a file named CNAME to the root of your build with your domain name

## Maintenance

Remember to periodically:
- Update dependencies
- Check for broken links
- Verify form submissions still work
- Refresh content as needed