import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { UserRegisterCredsType, UserType } from "@/types/user.type";

// In-memory user storage for now
const users: UserType[] = [];

export async function POST(req: Request) {
  try {
    const body: UserRegisterCredsType = await req.json();

    if (!body.username || !body.password || !body.repeatPassword) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (body.password !== body.repeatPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    const existing = users.find((u) => u.username === body.username);
    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const newUser: UserType = {
      username: body.username,
      password: hashedPassword,
      gender: body.gender || null,
      profilePhoto: "", // default empty
      level: 1,
      totalXp: 0,
      longestStreak: 0,
      habites: [],
    };

    users.push(newUser);

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
