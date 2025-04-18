#!/bin/bash

# Stop on errors
set -e

echo "🔧 Building the project for production..."
npm run build

echo "📦 Preparing for GitHub Pages deployment..."

# Create a GitHub Pages deployment
cd dist/public

# Create a .nojekyll file to prevent Jekyll processing
touch .nojekyll

# Create CNAME file if you have a custom domain
# echo "your-domain.com" > CNAME

# Create a basic 404 page
cat > 404.html << EOL
<!DOCTYPE html>
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
</html>
EOL

echo "🚀 Ready for deployment!"
echo "To deploy to GitHub Pages, run: npx gh-pages -d dist/public"