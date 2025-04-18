# Mohammad A. Alassiri - Portfolio

This is a modern, responsive portfolio website for Mohammad A. Alassiri, designed to showcase full-stack development skills and professional projects with an elegant, user-friendly interface.

## Features

- **Modern Design**: Clean, minimalist layout inspired by Swiss Design principles
- **Responsive**: Fully responsive design that works on all devices
- **Animated Components**: Smooth animations for enhanced user experience
- **Technology Categories**: Organized display of technology skills
- **Project Portfolio**: Showcasing development projects with details
- **Contact Form**: Built-in contact functionality 
- **Analytics**: Basic visitor tracking and analytics
- **CV Download**: Resume/CV download functionality

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion, CSS animations
- **State Management**: React hooks
- **Backend**: Express.js (Node.js)
- **Deployment**: GitHub Pages compatible

## Local Development

### Prerequisites

- Node.js 18+ and npm 9+

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/alassiri-portfolio.git
   cd alassiri-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5000
   ```

## Building for Production

To build the application for production:

```bash
npm run build
```

This will create a production-ready build in the `dist/` directory.

## Deployment

### Option 1: GitHub Pages (Recommended)

The project includes tools to easily deploy to GitHub Pages:

1. Build the project:
   ```bash
   npm run build
   ```

2. Run the deployment script:
   ```bash
   node deploy-static.js
   ```

3. Deploy to GitHub Pages:
   ```bash
   npx gh-pages -d static-build
   ```

### Option 2: Manual Deployment

You can also deploy the static build to any static hosting service (Netlify, Vercel, etc.):

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `dist/public` directory to your hosting provider.

## Project Structure

```
├── client/             # Frontend React application
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── data/       # Static data files
│   │   ├── hooks/      # Custom React hooks
│   │   ├── lib/        # Utility functions
│   │   ├── pages/      # Page components
│   │   ├── App.tsx     # Main App component
│   │   └── main.tsx    # Entry point
│   └── index.html      # HTML template
│
├── public/             # Static assets
│   ├── assets/         # Images, fonts, etc.
│   ├── sitemap.xml     # Site map for SEO
│   └── robots.txt      # Robots file for SEO
│
├── server/             # Backend Express server
│   ├── analytics.ts    # Basic analytics implementation
│   ├── index.ts        # Server entry point
│   └── routes.ts       # API routes
│
├── shared/             # Shared code between client and server
│   └── schema.ts       # Data schemas
│
├── deploy-static.js    # Static deployment script
├── deploy.sh           # Deployment shell script
└── README.md           # This file
```

## SEO Optimization

The portfolio includes several SEO optimizations:

1. Semantic HTML structure
2. Meta tags for improved search engine visibility
3. Sitemap.xml for search engine indexing
4. Robots.txt to guide search engine crawlers
5. Optimized page load times

## Performance Optimizations

- Code splitting for faster initial load
- Asset optimization
- Lazy loading of components
- Efficient animation implementations

## License

MIT

---

Designed and developed by/for Mohammad A. Alassiri, 2024