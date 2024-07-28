import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@app": path.resolve("src/app"),
      "@client": path.resolve("src/client"),
      "@shared": path.resolve("src/shared"),
    },
  },
});
