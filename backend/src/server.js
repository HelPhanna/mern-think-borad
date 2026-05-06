import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./modules/notes/notes.routes.js";
import { connectDB } from "./config/database.js";
import rateLimiter from "./middlewares/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

async function start() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Startup failed:", error);
    process.exit(1);
  }
}

start();