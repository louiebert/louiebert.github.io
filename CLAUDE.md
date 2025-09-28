# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Louie Bertoncin, built as a static single-page application and hosted on GitHub Pages. The site showcases experience, education, and projects using a clean, responsive design.

## Architecture

**Single-Page Application Structure:**

- `index.html` - Main HTML file containing all content sections (About, Experience, Education, Connect)
- Uses anchor-based navigation with smooth scrolling between sections
- Fixed header that shrinks on scroll using custom JavaScript animations
- Responsive design built with Tailwind CSS utility classes and custom CSS animations

**Key Files:**

- `index.html` - Main entry point with all HTML content
- `animations.ts` - Header scroll animation logic
- `src/css/styling.css` - Primary custom styles
- `src/css/animate.css` - CSS animation library
- `src/css/hover.css` - Hover effect styles
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

- Tailwind CSS 4.x for utility-first styling and responsive design
- jQuery 1.11.3 for DOM manipulation and smooth scrolling
- Font Awesome 4.3.0 for social media icons

**Development Tools:**

- Vite 7.1.7 for development server and build tooling
- TypeScript support configured
- Tailwind CSS configured with custom theme and utility classes

**Styling:**

- Google Fonts: Oswald and Raleway (configured in Tailwind theme)
- Hybrid approach: Tailwind utilities for layout + custom CSS for complex animations
- Advanced hover effects and transitions for interactive project cards
- Optimized CSS using @apply directives where beneficial

**Analytics:**

- Google Analytics integration for page tracking

## Code Conventions

**HTML Structure:**

- Semantic section-based layout with anchor IDs for navigation
- Tailwind utility classes for responsive design and layout
- Custom mobile menu with JavaScript toggle functionality

**CSS Organization:**

- Modular CSS files by purpose (styling, animations, hover effects)
- Hybrid approach: Tailwind @apply directives + custom CSS for complex behaviors
- Mobile-first responsive design using Tailwind breakpoints
- Optimized CSS with reduced redundancy (13% smaller after Bootstrap removal)

**JavaScript:**

- Vanilla JavaScript for animations and mobile menu toggle
- jQuery for DOM manipulation and smooth scrolling
- IIFE pattern for encapsulation in animations.ts

## Common Development Tasks

**Content Updates:**

- Edit sections directly in `index.html`
- Update project cards in the Experience section
- Modify social links in the Connect section

**Styling Changes:**

- Layout and spacing: Use Tailwind utility classes directly in HTML
- Complex animations: Modify `src/css/styling.css` (preserved custom CSS)
- Simple styling: Use Tailwind utilities or @apply directives
- Animation timing and effects in `animations.ts`
- Hover effects configured in `src/css/hover.css`

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

## Architecture Migration Notes

**Bootstrap to Tailwind Migration (Completed):**

This project was successfully migrated from Bootstrap 3.3.7 to Tailwind CSS 4.x in 2025:

**What was changed:**

- All Bootstrap grid classes (`container`, `row`, `col-*`) → Tailwind flexbox utilities
- Bootstrap components (`jumbotron`, `navbar`) → Custom Tailwind implementations
- Bootstrap spacing and layout → Tailwind utility classes
- Bootstrap responsive breakpoints → Tailwind responsive system

**What was preserved:**

- All custom animations and hover effects in experience cards
- Complex CSS behaviors (header scroll animations, profile picture positioning)
- Visual appearance and functionality identical to original design
- Existing JavaScript functionality and smooth scrolling

**Current CSS Strategy:**

- **Tailwind utilities**: Layout, spacing, colors, typography, responsive design
- **Custom CSS**: Complex animations, intricate hover effects, specialized positioning
- **Hybrid approach**: @apply directives for common patterns in custom CSS
- **Zero Bootstrap**: Complete removal of Bootstrap CSS and JS dependencies

**Benefits achieved:**

- 13% reduction in CSS file size
- More maintainable utility-first approach for layout
- Preserved sophisticated custom animations
- Modern responsive design patterns
- Eliminated unused Bootstrap overhead
