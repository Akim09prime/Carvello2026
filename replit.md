# Carvello StudioCraft - Custom Furniture Website

## Overview

This is a premium custom furniture business website for "Carvello StudioCraft" based in Bucharest, Romania. The application features a dark luxury aesthetic with gold accents, offering services including custom furniture manufacturing, CNC machining, painting services, and 3D design/rendering. The site includes a product catalog, customer reviews, contact forms, and a portfolio showcase.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom dark luxury theme (charcoal background #1F1F1F, gold accent #BE9A5A)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll effects
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack React Query for server state

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts`
- **Build Tool**: Vite for frontend, esbuild for server bundling

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - defines products, contact messages, and reviews tables
- **Validation**: Zod schemas generated from Drizzle schemas using drizzle-zod
- **Database Migrations**: Drizzle Kit with `db:push` command

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks for API calls
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod
```

### Design Patterns
- **Shared Types**: TypeScript types are shared between frontend and backend via the `shared/` directory
- **Type-safe API**: API routes defined with Zod schemas for input validation and response types
- **Path Aliases**: `@/` maps to client/src, `@shared/` maps to shared directory

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage for Express sessions

### UI/Styling
- **Google Fonts**: DM Serif Display (headings), Inter (body text)
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS framework with custom theme tokens

### Build & Development
- **Vite**: Development server with HMR and production bundling
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment

### Form & Validation
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Zod integration for form validation
- **Zod**: Schema validation library used throughout

### State & Data Fetching
- **TanStack React Query**: Server state management and caching