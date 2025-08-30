# Overview

This is a full-stack web application built as a personal portfolio website for a mobile app developer. The application showcases the developer's experience, skills, projects, and contact information through a modern, responsive single-page application. The frontend is built with React and features a comprehensive component library, while the backend provides a foundation for potential future features with Express.js and database integration capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side application is built using **React 18** with **TypeScript** and follows a component-based architecture:

- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Extensive use of Radix UI primitives with shadcn/ui components for consistent, accessible design
- **Styling**: Tailwind CSS with CSS variables for theming, supporting both light and dark modes
- **State Management**: TanStack Query for server state management with custom query client configuration
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation through Hookform Resolvers

The application structure follows a clear separation of concerns:
- Components are organized by UI elements and page sections
- Custom hooks handle reusable logic (mobile detection, toast notifications, theme management)
- Utility functions centralize common operations
- Type-safe configuration with comprehensive TypeScript support

## Backend Architecture
The server-side is built with **Node.js** and **Express.js** using a modular architecture:

- **Framework**: Express.js with TypeScript support and ESM modules
- **Development**: Custom Vite integration for SSR-ready development environment
- **Storage Interface**: Abstracted storage layer with in-memory implementation and interface for future database integration
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Logging**: Custom request logging with performance metrics for API endpoints

The backend follows clean architecture principles with separation between routes, storage, and server configuration.

## Data Layer
Currently implements an **in-memory storage solution** with a well-defined interface:

- **Schema Definition**: Drizzle ORM schemas with Zod validation for type safety
- **Database Ready**: PostgreSQL configuration with Neon Database serverless connection
- **Storage Interface**: Abstract storage layer allowing easy migration from in-memory to persistent storage
- **Type Safety**: Full TypeScript integration with inferred types from Drizzle schemas

## Development & Build System
The application uses a sophisticated development setup:

- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reloading**: Vite HMR for frontend with Express restart for backend changes
- **Type Checking**: Comprehensive TypeScript configuration with path aliases
- **Asset Handling**: Vite-based asset processing with alias resolution

## Design System
Built on a comprehensive design system foundation:

- **Component Library**: Complete set of accessible UI components based on Radix UI
- **Theme System**: CSS variables-based theming with light/dark mode support
- **Typography**: Custom font loading with Inter, architects daughter, and monospace fonts
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animation**: Intersection Observer-based animations for enhanced user experience

# External Dependencies

## Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible component foundations
- **Styling**: Tailwind CSS for utility-first styling approach
- **State Management**: TanStack Query for server state and caching
- **Form Management**: React Hook Form with Hookform Resolvers for validation
- **Validation**: Zod for runtime type checking and schema validation
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx and tailwind-merge for conditional styling, date-fns for date manipulation

## Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL with connection pooling
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Drizzle-zod integration for consistent validation across client and server

## Development Tools
- **Build System**: Vite with React plugin and custom server integration
- **Development**: Custom Vite plugins for error handling and development experience
- **Database Migrations**: Drizzle Kit for schema management and migrations
- **Type Checking**: TypeScript with strict configuration and comprehensive type inference

## Asset Management
- **Static Assets**: PDF resume files served through Vite asset handling
- **Image Optimization**: External image CDN (Unsplash) for project showcases
- **Font Loading**: Google Fonts integration for custom typography

The application is designed to be easily deployable with environment-based configuration for database connections and supports both development and production environments with appropriate optimizations for each.