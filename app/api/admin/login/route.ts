import { NextRequest, NextResponse } from "next/server";
import { validateCredentials } from "@/lib/admin/kv";
import { createSession } from "@/lib/admin/auth";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    if (!username || !password)
      return NextResponse.json({ ok: false, error: "Username and password required" });

    const valid = await validateCredentials(username, password);
    if (!valid)
      return NextResponse.json({ ok: false, error: "Invalid username or password" });

    await createSession(username);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
