import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

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
