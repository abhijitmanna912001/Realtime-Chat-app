import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(
  cors({
    origin: [
      "http://localhost:5173", // ✅ for local dev
      "https://realtime-chat-app-iig0.onrender.com", // ✅ your deployed frontend
    ],
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

console.log("📌 About to register auth routes");
app.use("/api/auth", authRoutes);
console.log("📌 About to register messages routes");
app.use("/api/messages", messageRoutes);
console.log("📌 About to register static fallback");

app.get("/", (req, res) => {
  res.send("✅ Realtime Chat App API is running");
});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  connectDB();
});
