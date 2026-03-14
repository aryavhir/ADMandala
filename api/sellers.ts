import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const s3Url = process.env.SELLERS_JSON_S3_URL;

    if (!s3Url) {
      return res.status(500).json({ error: "SELLERS_JSON_S3_URL environment variable is not defined" });
    }

    const response = await fetch(s3Url);

    if (!response.ok) {
      return res.status(500).json({ error: `Failed to fetch sellers.json: ${response.statusText}` });
    }

    const data = await response.text();

    // Set correct headers
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");

    // Return raw JSON text as requested
    res.status(200).send(data);
  } catch (error) {
    console.error("Error fetching sellers.json:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
