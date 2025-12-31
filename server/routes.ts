import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { quoteRequestSchema, type PortfolioProject } from "@shared/schema";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, `quote-${uniqueSuffix}${ext}`);
    }
  }),
  limits: { fileSize: 8 * 1024 * 1024, files: 8 },
  fileFilter: (req, file, cb) => {
    const allowed = ['.jpg', '.jpeg', '.png', '.webp', '.pdf', '.mp4'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Tip de fișier neacceptat'));
    }
  }
});

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);
  
  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 });
    return true;
  }
  
  if (limit.count >= 5) {
    return false;
  }
  
  limit.count++;
  return true;
}

function loadPortfolio(): PortfolioProject[] {
  try {
    const dataPath = path.join(process.cwd(), "data", "portfolio.json");
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data).projects || [];
  } catch {
    return [];
  }
}

function saveQuote(quote: any) {
  const quotesPath = path.join(process.cwd(), "data", "quotes.json");
  let quotes = { quotes: [] as any[] };
  
  try {
    const existing = fs.readFileSync(quotesPath, "utf-8");
    quotes = JSON.parse(existing);
  } catch {}
  
  quotes.quotes.push({
    ...quote,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  });
  
  fs.writeFileSync(quotesPath, JSON.stringify(quotes, null, 2));
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Products
  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.post(api.products.create.path, async (req, res) => {
    try {
      const input = api.products.create.input.parse(req.body);
      const product = await storage.createProduct(input);
      res.status(201).json(product);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Contact
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Reviews
  app.get(api.reviews.list.path, async (req, res) => {
    const reviews = await storage.getReviews();
    res.json(reviews);
  });

  app.post(api.reviews.create.path, async (req, res) => {
    try {
      const input = api.reviews.create.input.parse(req.body);
      const review = await storage.createReview(input);
      res.status(201).json(review);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Portfolio
  app.get(api.portfolio.list.path, (req, res) => {
    const projects = loadPortfolio();
    res.json(projects);
  });

  app.get(api.portfolio.get.path, (req, res) => {
    const projects = loadPortfolio();
    const project = projects.find(p => p.id === req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Proiect negăsit" });
    }
    res.json(project);
  });

  // Quote with file upload
  app.post(api.quote.submit.path, upload.array("files", 8), (req, res) => {
    try {
      const ip = req.ip || req.socket.remoteAddress || "unknown";
      
      if (!checkRateLimit(ip)) {
        return res.status(429).json({ message: "Prea multe cereri. Încercați mai târziu." });
      }
      
      if (req.body.honeypot) {
        return res.status(400).json({ message: "Invalid request", field: "honeypot" });
      }
      
      const formData = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        requestType: req.body.requestType,
        location: req.body.location,
        message: req.body.message,
        gdprConsent: req.body.gdprConsent === "true",
      };
      
      const parsed = quoteRequestSchema.safeParse(formData);
      if (!parsed.success) {
        return res.status(400).json({
          message: parsed.error.errors[0].message,
          field: parsed.error.errors[0].path.join('.'),
        });
      }
      
      const files = (req.files as Express.Multer.File[]) || [];
      const fileNames = files.map(f => f.filename);
      
      saveQuote({
        ...parsed.data,
        files: fileNames,
        ip
      });
      
      res.status(201).json({ success: true, message: "Cererea a fost trimisă cu succes!" });
    } catch (err) {
      console.error("Quote submission error:", err);
      res.status(500).json({ message: "Eroare la trimiterea cererii" });
    }
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const products = await storage.getProducts();
  if (products.length === 0) {
    await storage.createProduct({
      name: "Masă Dining Premium",
      description: "Stejar masiv cu accente metalice aurii.",
      price: "4500 RON",
      image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80",
      category: "Dining"
    });
    await storage.createProduct({
      name: "Fotoliu Velvet Gold",
      description: "Tapiterie catifea premium, picioare metalice.",
      price: "2200 RON",
      image: "https://images.unsplash.com/photo-1567538096630-e994826726dad?auto=format&fit=crop&q=80",
      category: "Living"
    });
    await storage.createProduct({
      name: "Bibliotecă Modulară",
      description: "Design minimalist, finisaj negru mat.",
      price: "6800 RON",
      image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80",
      category: "Office"
    });
  }

  const reviews = await storage.getReviews();
  if (reviews.length === 0) {
    await storage.createReview({
      name: "Alexandru Popescu",
      role: "Arhitect",
      content: "Calitate excepțională și atenție la detalii. Recomand cu încredere pentru proiecte custom.",
      rating: 5
    });
    await storage.createReview({
      name: "Maria Ionescu",
      role: "Client Rezidențial",
      content: "Bucătăria a ieșit exact așa cum am visat. Echipa de montaj a fost foarte profesionistă.",
      rating: 5
    });
    await storage.createReview({
      name: "Stefan Radu",
      role: "Antreprenor",
      content: "Am mobilat tot biroul cu Carvello. Termene respectate și comunicare excelentă.",
      rating: 5
    });
  }
}
