import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware to parse JSON bodies
app.use(
  cors({
    origin: "http://localhost:5173", // allow requests from the frontend
  }),
);

app.use(express.json());

// rate limiter middleware
app.use(rateLimiter);

// simple custom middleware
// app.use((req, res, next) => {
//     console.log(`Req method: ${req.method}, URL: ${req.url}`);
//     next();
// })

// ────────────────────────────────────────────────
//                   Routes
// ────────────────────────────────────────────────
// routes
app.use("/api/notes", notesRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// connect to the database and start the server
async function start() {
  try {
    await connectDB(); // waits here

    app.listen(PORT, () => {
      console.log(`Server running → http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Startup failed:", error);
    process.exit(1);
  }
}

start();
