import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { UserType } from "@/types/user.type";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

declare const users: UserType[];

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { username: string };

    const user = users.find((u) => u.username === decoded.username);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Remove password before sending
    const { password, ...safeUser } = user;

    return NextResponse.json(safeUser);
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }
}
