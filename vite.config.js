import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/Art-Gallery/',
  build: {
    rollupOptions: {
      input: {
        // Cambiamos __dirname (quedaron obsoleta) por import.meta.dirname
        main: resolve(import.meta.dirname, 'index.html'),      
        location: resolve(import.meta.dirname, 'location.html') 
      }
    }
  }
});
