import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: text("price").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role"),
  content: text("content").notNull(),
  rating: integer("rating").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertContactSchema = createInsertSchema(contactMessages).omit({ id: true });
export const insertReviewSchema = createInsertSchema(reviews).omit({ id: true });

export const quoteRequestSchema = z.object({
  name: z.string().min(2, "Numele este obligatoriu"),
  phone: z.string().min(10, "Telefonul este obligatoriu"),
  email: z.string().email("Email invalid"),
  requestType: z.enum(["mobilier", "cnc", "vopsitorie", "proiectare"]),
  location: z.string().min(2, "Locația este obligatorie"),
  message: z.string().min(10, "Descrieți pe scurt cererea"),
  gdprConsent: z.boolean().refine(val => val === true, "Consimțământul GDPR este obligatoriu"),
});

export type QuoteRequest = z.infer<typeof quoteRequestSchema>;

export interface PortfolioProject {
  id: string;
  date: string;
  category: string;
  title: string;
  location: string;
  cover: string;
  summary: string;
  videoUrl: string;
  steps: { label: string; media: string[] }[];
  gallery: string[];
}

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactSchema>;
export type Review = typeof reviews.$inferSelect;
export type InsertReview = z.infer<typeof insertReviewSchema>;
