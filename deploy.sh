#!/bin/bash

# Portfolio Website Deployment Script
# This script automates the complete process of deploying the portfolio website to GitHub Pages

# Display colored output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}======================================================${NC}"
echo -e "${GREEN}Mohammad A. Alassiri Portfolio - Deployment Script${NC}"
echo -e "${BLUE}======================================================${NC}"

# Step 1: Update browserslist database
echo -e "\n${YELLOW}Step 1: Updating browserslist database...${NC}"
npx update-browserslist-db@latest

# Step 2: Clean and build the project
echo -e "\n${YELLOW}Step 2: Building project for production...${NC}"
npm run build
if [ $? -ne 0 ]; then
  echo -e "${RED}Build failed! Please fix the errors and try again.${NC}"
  exit 1
else
  echo -e "${GREEN}Build successful!${NC}"
fi

# Step 3: Generate the static site
echo -e "\n${YELLOW}Step 3: Generating static site...${NC}"
node deploy-static.js
if [ $? -ne 0 ]; then
  echo -e "${RED}Static site generation failed!${NC}"
  exit 1
else
  echo -e "${GREEN}Static site generated successfully!${NC}"
fi

# Step 4: Deploy to GitHub Pages (if gh-pages is installed)
echo -e "\n${YELLOW}Step 4: Deploying to GitHub Pages...${NC}"
if npx gh-pages -d static-build; then
  echo -e "${GREEN}Deployment successful!${NC}"
  echo -e "${BLUE}Your site should be available at your GitHub Pages URL shortly.${NC}"
else
  echo -e "${RED}Deployment failed. Please check if gh-pages is installed:${NC}"
  echo -e "${YELLOW}npm install -g gh-pages${NC}"
  echo -e "${RED}Or deploy manually:${NC}"
  echo -e "${YELLOW}npx gh-pages -d static-build${NC}"
fi

echo -e "\n${GREEN}Deployment process completed!${NC}"
echo -e "${BLUE}======================================================${NC}"