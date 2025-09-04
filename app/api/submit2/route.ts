import { NextResponse } from "next/server";

const URL = process.env.GGSHEETAPI || ""
console.log(URL)
if (!URL) {
  console.log("require URL in env file")
  process.exit(0)
}


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    return NextResponse.json(result);
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(error);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
