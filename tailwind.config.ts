import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        cyan: "#00f0ff",
        violet: "#7b00ff",
        mist: "#d7e8ff",
        panel: "rgba(9, 11, 18, 0.62)"
      },
      boxShadow: {
        glow: "0 0 50px rgba(0, 240, 255, 0.18)",
        violet: "0 0 40px rgba(123, 0, 255, 0.24)"
      },
      backgroundImage: {
        "scene-grid":
          "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)"
      },
      fontFamily: {
        sans: ["Space Grotesk", "Sora", "Segoe UI", "sans-serif"],
        display: ["Syne", "Space Grotesk", "sans-serif"]
      },
      backdropBlur: {
        cinematic: "32px"
      },
      borderRadius: {
        cinematic: "2rem"
      },
      keyframes: {
        pulseGrid: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(1.02)" }
        },
        floatCard: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-130%)" },
          "100%": { transform: "translateX(130%)" }
        }
      },
      animation: {
        "pulse-grid": "pulseGrid 8s ease-in-out infinite",
        "float-card": "floatCard 7s ease-in-out infinite",
        shimmer: "shimmer 1.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
