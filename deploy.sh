#!/bin/bash

# Terminal colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Starting Portfolio Website Deployment ===${NC}"

# Ensure we have latest dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
npm ci

# Build the project using the static-build script
echo -e "${YELLOW}Building for production...${NC}"
node deploy-static.js

# Check if build was successful
if [ ! -d "static-build" ]; then
  echo -e "${RED}Build failed. Check errors above.${NC}"
  exit 1
fi

# Ensure CNAME file exists in the output directory
echo -e "${YELLOW}Ensuring CNAME is present...${NC}"
echo "alassiri.nl" > static-build/CNAME

# Deploy to GitHub Pages
echo -e "${YELLOW}Deploying to GitHub Pages...${NC}"
npx gh-pages -d static-build

# Check if deployment was successful
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✅ Deployment successful!${NC}"
  echo -e "${BLUE}The site will be available shortly at: https://alassiri.nl${NC}"
  
  echo -e "${YELLOW}⚠️ Important Notes:${NC}"
  echo -e "1. ${YELLOW}If your custom domain is not working, go to GitHub repo > Settings > Pages${NC}"
  echo -e "   ${YELLOW}and ensure your custom domain 'alassiri.nl' is still set.${NC}"
  echo -e "2. ${YELLOW}It may take a few minutes for changes to propagate.${NC}"
  echo -e "3. ${YELLOW}Clear your browser cache if you don't see updates.${NC}"
else
  echo -e "${RED}❌ Deployment failed. Check errors above.${NC}"
  exit 1
fi

echo -e "${BLUE}=== Deployment process complete ===${NC}"