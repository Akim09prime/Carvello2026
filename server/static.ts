import express, { type Express, type Request, type Response } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath, {
    maxAge: '1d',
    etag: true
  }));

  // Explicit root route
  app.get("/", (_req: Request, res: Response) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });

  // SPA fallback - serve index.html for all non-API routes
  app.get("*", (req: Request, res: Response) => {
    // Skip API routes
    if (req.path.startsWith("/api")) {
      return res.status(404).json({ message: "Not found" });
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
