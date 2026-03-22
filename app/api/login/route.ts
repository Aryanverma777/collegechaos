import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "@/lib/session";
import admin from "@/lib/firebaseAdmin";
import clientPromise from "@/lib/mongodb";

export async function POST(req: NextRequest) {

  // Step 1 — get the token the browser sent us
  const { idToken } = await req.json();

  if (!idToken) {
    return NextResponse.json({ error: "No token provided" }, { status: 400 });
  }

  try {
    // Step 2 — ask Firebase Admin "is this token real?"
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    // Step 3 — extract user info from the verified token
    const { uid, email } = decodedToken;
    const role = decodedToken.role as string ?? "student";

    // Step 4 — save user in MongoDB if they don't exist yet
    const client = await clientPromise;
    const db = client.db("chaos_app"); // your DB name
    const usersCollection = db.collection("chaos_login");

    const existingUser = await usersCollection.findOne({ uid });

    if (!existingUser) {
      await usersCollection.insertOne({
        uid,
        email,
        role,
        createdAt: new Date(),
      });
    }

    // Step 5 — create the session cookie
    const session = await getIronSession<SessionData>(
      await cookies(),
      sessionOptions
    );

    session.userId = uid;
    session.email = email as string;
    session.role = role;
    session.isLoggedIn = true;

    console.log('🔐 Creating session for uid:', uid);
    
    await session.save(); // this encrypts and sends the cookie
    
    console.log('✅ Session saved successfully');
    
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Login error details:", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
  }
}