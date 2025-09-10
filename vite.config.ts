import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  // Set base to your repo name for GitHub Pages!
  base: "/raaganjali-fusion-site/",
  build: {
    outDir: "docs", // Output build files to docs folder for GitHub Pages
  },
  plugins: [
    react(),
    componentTagger()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  }
});
