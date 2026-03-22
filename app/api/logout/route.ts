import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST() {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );

  await session.destroy(); // wipe the cookie completely

  return NextResponse.json({ success: true });
}
