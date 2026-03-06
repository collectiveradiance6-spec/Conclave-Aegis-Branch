import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import { verifyToken } from "./middleware/verifyToken";
import { checkAdmin } from "./middleware/roles";
import { getServiceStatus, restartService } from "./services/nitradoService";
import { startDiscordBot } from "./bot";
import { initBeacon } from "./services/beaconService";

const {
  DISCORD_BOT_TOKEN,
  CLIENT_ID,
  GUILD_ID,
  PORT,
  NODE_ENV,
} = process.env;

if (!DISCORD_BOT_TOKEN) throw new Error("❌ DISCORD_BOT_TOKEN missing");
if (!CLIENT_ID) throw new Error("❌ CLIENT_ID missing");

const APP_PORT = Number(PORT) || 5001;
const IS_PROD = NODE_ENV === "production";

const app = express();
app.use(express.json());

// ----------------------------
// Routes
// ----------------------------
app.get("/", (_req, res) => {
  res.json({
    name: "Conclave Aegis",
    status: "online",
    environment: NODE_ENV || "development",
  });
});

app.get("/health", (_req, res) => res.send("OK"));

// Admin Nitrado routes
app.get(
  "/admin/nitrado/:serviceId/status",
  verifyToken,
  checkAdmin,
  async (req, res, next) => {
    try {
      const data = await getServiceStatus(req.params.serviceId);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
);

app.post(
  "/admin/nitrado/:serviceId/restart",
  verifyToken,
  checkAdmin,
  async (req, res, next) => {
    try {
      const data = await restartService(req.params.serviceId);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
);

// ----------------------------
// Global error handler
// ----------------------------
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error("❌ Error:", err);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

// ----------------------------
// Startup
// ----------------------------
async function start() {
  try {
    console.log("🔄 Initializing services...");

    await initBeacon(); // Beacon project init
    await startDiscordBot({
      token: DISCORD_BOT_TOKEN,
      clientId: CLIENT_ID,
      guildId: GUILD_ID,
      isProd: IS_PROD,
      commands: [
        { name: "ping", description: "Check Aegis latency" },
        { name: "status", description: "Check bot & server status" },
      ],
    });

    app.listen(APP_PORT, () =>
      console.log(`🚀 Express server running on port ${APP_PORT} (${NODE_ENV || "dev"})`)
    );
  } catch (err) {
    console.error("❌ Startup failed:", err);
    process.exit(1);
  }
}

start();

// ----------------------------
// Graceful shutdown
// ----------------------------
process.on("SIGINT", async () => {
  console.log("🛑 Shutting down Aegis...");
  // Add service shutdown if needed (e.g., Discord, Nitrado)
  process.exit(0);
});