import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserType, UserLoginCredsType } from "@/types/user.type";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

declare const users: UserType[]; // re-use in-memory users

export async function POST(req: Request) {
  try {
    const body: UserLoginCredsType = await req.json();

    const user = users.find((u) => u.username === body.username);
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const valid = await bcrypt.compare(body.password, user.password);
    if (!valid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return NextResponse.json({ token });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
