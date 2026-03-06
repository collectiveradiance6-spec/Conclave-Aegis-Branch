import axios from "axios";

const BEACON_API_KEY = process.env.BEACON_API_KEY;
const BEACON_SENTINEL_KEY = process.env.BEACON_SENTINEL_KEY;

if (!BEACON_API_KEY) {
  throw new Error("BEACON_API_KEY missing");
}

export async function getBeaconStatus() {
  try {
    const response = await axios.get("https://api.usebeacon.app/status", {
      headers: {
        Authorization: `Bearer ${BEACON_API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Beacon error:", error);
    throw new Error("Failed to fetch Beacon status");
  }
}