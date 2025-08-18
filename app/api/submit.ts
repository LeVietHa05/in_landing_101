import type { NextApiRequest, NextApiResponse } from "next";

const URL = process.env.GGSHEETAPI || "";
if (!URL) {
  console.log("require GGSHEETAPI in env file");
  process.exit(0);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // call tới Google Apps Script Web App
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    res.status(200).json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ success: false, error: error.message });
    } else {
      res
        .status(500)
        .json({ success: false, error: "An unknown error occurred" });
    }
  }
}
