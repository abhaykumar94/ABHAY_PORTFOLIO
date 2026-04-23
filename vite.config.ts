import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  plugins: [
    react(),
    glsl({
      include: ["**/*.glsl", "**/*.vert", "**/*.frag"]
    })
  ],
  build: {
    chunkSizeWarningLimit: 1800,
    rollupOptions: {
      output: {
        manualChunks: {
          core: ["react", "react-dom", "react-router-dom", "zustand"],
          motion: ["framer-motion", "gsap", "lenis"],
          "three-core": ["three"],
          r3f: ["@react-three/fiber"],
          drei: ["@react-three/drei"],
          physics: ["@react-three/rapier"],
          postfx: ["@react-three/postprocessing", "postprocessing"]
        }
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5173
  }
});
