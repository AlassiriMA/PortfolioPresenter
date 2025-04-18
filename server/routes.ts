import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { trackPageView, getAnalyticsData } from "./analytics";

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

// Page view schema
const pageViewSchema = z.object({
  page: z.string().default("/"),
  title: z.string().optional(),
  referrer: z.string().optional()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // For now, just log the contact form submission
      // In a real application, you would store this in a database or send an email
      console.log("Contact form submission received:", validatedData);
      
      res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map(err => `${err.path}: ${err.message}`).join(", ");
        res.status(400).json({ success: false, message: errorMessages });
      } else {
        res.status(500).json({ success: false, message: "Server error" });
      }
    }
  });

  // Analytics tracking endpoints
  app.post("/api/track", (req, res) => {
    try {
      const validatedData = pageViewSchema.parse(req.body);
      trackPageView(req, res);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid tracking data" });
      } else {
        res.status(500).json({ success: false, message: "Server error" });
      }
    }
  });
  
  // Admin analytics dashboard endpoint
  app.get("/api/analytics", (req, res) => {
    getAnalyticsData(req, res);
  });

  const httpServer = createServer(app);
  return httpServer;
}
