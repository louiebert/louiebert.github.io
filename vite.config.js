import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  // Serve static files from the root directory
  root: ".",

  // Public directory for static assets
  publicDir: "public",

  // Build configuration
  build: {
    // Output directory for built files
    outDir: "dist",

    // Don't minify for easier debugging
    minify: false,

    // Assets directory within outDir
    assetsDir: "assets",

    // Generate source maps for debugging
    sourcemap: true,

    // Copy public directory contents to build
    copyPublicDir: true,

    // Rollup options
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },

  // Development server configuration
  server: {
    // Port for dev server
    port: 3000,

    // Open browser automatically
    open: true,

    // Host configuration
    host: true,
  },

  // Base path for GitHub Pages deployment
  base: "./",
});
