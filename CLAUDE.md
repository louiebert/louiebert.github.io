# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Louie Bertoncin, built as a static single-page application and hosted on GitHub Pages. The site showcases experience, education, and projects using a clean, responsive design.

## Architecture

**Single-Page Application Structure:**

- `index.html` - Main HTML file containing all content sections (About, Experience, Education, Connect)
- Uses anchor-based navigation with smooth scrolling between sections
- Fixed header that shrinks on scroll using custom JavaScript animations
- Responsive design built on Bootstrap 3 grid system

**Key Files:**

- `index.html` - Main entry point with all HTML content
- `animations.js` - Header scroll animation logic
- `css/styling.css` - Primary custom styles
- `css/animate.css` - CSS animation library
- `css/hover.css` - Hover effect styles
- `vite.config.js` - Vite configuration for development and build
- `package.json` - Node.js dependencies and npm scripts
- `CNAME` - Custom domain configuration for GitHub Pages
- `/public/` - Static assets for Vite (images, CNAME, favicon)
- `/dist/` - Built and optimized production files (generated)

## Development Workflow

**Build System:**

- Vite development server and build system for fast development and optimized production builds
- Package.json with npm scripts for development, build, and preview
- Static asset optimization and bundling

**Local Development:**

- `npm run dev` - Start Vite development server on http://localhost:3000
- Hot module replacement for instant updates during development
- `npm run build` - Build optimized production files to `/dist` directory
- `npm run preview` - Preview production build locally

**Deployment:**

- Build process generates optimized files in `/dist` directory
- Automatic deployment via GitHub Pages on push to master
- Custom domain configured via CNAME file (louiebertoncin.com)
- Static assets are optimized and cache-busted with content hashes

## Technology Stack

**Frontend Framework:**

- Bootstrap 3.3.7 for responsive grid and components
- jQuery 1.11.3 for DOM manipulation and smooth scrolling
- Font Awesome 4.3.0 for social media icons

**Development Tools:**

- Vite 7.1.7 for development server and build tooling
- TypeScript support configured
- TailwindCSS available for modern styling (optional)

**Styling:**

- Google Fonts: Oswald and Raleway
- Custom CSS with CSS3 animations and transitions
- Hover effects library for interactive elements

**Analytics:**

- Google Analytics integration for page tracking

## Code Conventions

**HTML Structure:**

- Semantic section-based layout with anchor IDs for navigation
- Bootstrap classes for responsive design
- External CDN resources for libraries

**CSS Organization:**

- Modular CSS files by purpose (styling, animations, hover effects)
- Custom properties and transitions for smooth interactions
- Mobile-first responsive design patterns

**JavaScript:**

- Vanilla JavaScript for animations (no frameworks)
- jQuery for DOM manipulation and event handling
- IIFE pattern for encapsulation in animations.js

## Common Development Tasks

**Content Updates:**

- Edit sections directly in `index.html`
- Update project cards in the Experience section
- Modify social links in the Connect section

**Styling Changes:**

- Primary styles in `css/styling.css`
- Animation timing and effects in `animations.js`
- Hover effects configured in `css/hover.css`

**Image Management:**

- Add new images to `/public/` directory
- Update image references in HTML to point to `/public/` assets
- Maintain consistent naming conventions for technology badges
- Vite automatically optimizes and versions images during build

**Development Commands:**

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production files to `/dist/`
- `npm run preview` - Preview production build locally
- `npm install` - Install/update dependencies
