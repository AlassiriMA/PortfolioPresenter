import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file and directory paths (ESM compatible)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple analytics data structure
interface AnalyticsData {
  pageViews: {
    total: number;
    byPage: Record<string, number>;
  };
  visitors: {
    total: number;
    uniqueIPs: string[];
  };
  lastUpdated: string;
}

// Path to store analytics data
const analyticsFilePath = path.join(__dirname, '../analytics-data.json');

// Initialize analytics data
const initializeAnalyticsData = (): AnalyticsData => {
  return {
    pageViews: {
      total: 0,
      byPage: {}
    },
    visitors: {
      total: 0,
      uniqueIPs: []
    },
    lastUpdated: new Date().toISOString()
  };
};

// Load analytics data from file
const loadAnalyticsData = (): AnalyticsData => {
  try {
    if (fs.existsSync(analyticsFilePath)) {
      const data = fs.readFileSync(analyticsFilePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading analytics data:', error);
  }
  
  // If file doesn't exist or there's an error, initialize new data
  const newData = initializeAnalyticsData();
  saveAnalyticsData(newData);
  return newData;
};

// Save analytics data to file
const saveAnalyticsData = (data: AnalyticsData): void => {
  try {
    fs.writeFileSync(analyticsFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving analytics data:', error);
  }
};

// Track page view
export const trackPageView = (req: Request, res: Response): void => {
  try {
    const { page = '/' } = req.body;
    const clientIP = req.ip || req.socket.remoteAddress || 'unknown';
    
    // Load current data
    const analyticsData = loadAnalyticsData();
    
    // Update page views
    analyticsData.pageViews.total += 1;
    analyticsData.pageViews.byPage[page] = (analyticsData.pageViews.byPage[page] || 0) + 1;
    
    // Update unique visitors (simple approach based on IP)
    if (!analyticsData.visitors.uniqueIPs.includes(clientIP)) {
      analyticsData.visitors.uniqueIPs.push(clientIP);
      analyticsData.visitors.total += 1;
    }
    
    // Update timestamp
    analyticsData.lastUpdated = new Date().toISOString();
    
    // Save updated data
    saveAnalyticsData(analyticsData);
    
    res.status(200).json({ success: true, message: 'Page view tracked' });
  } catch (error) {
    console.error('Error tracking page view:', error);
    res.status(500).json({ success: false, message: 'Error tracking page view' });
  }
};

// Get analytics data (admin only)
export const getAnalyticsData = (req: Request, res: Response): void => {
  try {
    const analyticsData = loadAnalyticsData();
    
    // For security reasons, we don't send the raw IPs to the client
    const safeData = {
      pageViews: analyticsData.pageViews,
      visitors: {
        total: analyticsData.visitors.total
      },
      lastUpdated: analyticsData.lastUpdated
    };
    
    res.status(200).json(safeData);
  } catch (error) {
    console.error('Error getting analytics data:', error);
    res.status(500).json({ success: false, message: 'Error retrieving analytics data' });
  }
};