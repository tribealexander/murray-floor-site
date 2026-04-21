import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("[quote]", body);
  // TODO: wire to email/CRM (Mikey will decide). Logs to Vercel for now.
  return NextResponse.json({ ok: true });
}
