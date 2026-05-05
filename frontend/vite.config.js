import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "karter-parablastic-falsely.ngrok-free.app",
      "karter-parablastic-falsely.ngrok-free.dev",
      // or just use "all" to allow everything:
    ],
  },
});
