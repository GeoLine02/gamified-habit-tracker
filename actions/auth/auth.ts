"use server";

import { getCollection } from "@/lib/db";
import { loginValidationSchema, registerValidationSchema } from "./validation";
import { handleHashPassword } from "@/components/utils/hashPassword";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/sessions";
import bcrypt from "bcryptjs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function register(_state: any, formData: FormData) {
  const validatedFields = registerValidationSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
    repeatPassword: formData.get("repeatPassword"),
    gender: formData.get("gender"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      username: formData.get("username"),
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { password, username, gender } = validatedFields.data;

  const userCollection = await getCollection("users");

  if (!userCollection)
    return {
      errors: {
        username: "Server error!",
        password: "",
        repeatPasswrod: "",
        gender: "",
      },
    };

  const existingUser = await userCollection.findOne({ username });

  if (existingUser)
    return {
      errors: {
        username: "Username already exist. Try another one",
        passowrd: "",
        repeatPassword: "",
        gender: "",
      },
    };

  const hashedPasswrod = await handleHashPassword(password, 10);

  // result
  const results = await userCollection?.insertOne({
    username,
    password: hashedPasswrod,
    gender,
    habits: [],
    achievements: [],
    level: 1,
    currentXp: 0,
    totalXp: 0,
    currentStreak: 0,
    totalSteak: 0,
  });

  await createSession(results.insertedId.toString());

  redirect("/");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(_state: any, formData: FormData) {
  const validatedFields = loginValidationSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      username: formData.get("username"),
    };

  const { username, password } = validatedFields.data;

  const usersCollection = await getCollection("users");

  if (!usersCollection)
    return { errors: { usenrame: "Server error", password: "" } };

  const existingUser = await usersCollection.findOne({ username });

  if (!existingUser)
    return { errors: { username: "Invalid credentials", password: "" } };

  const matchedPassword = await bcrypt.compare(password, existingUser.password);

  if (!matchedPassword)
    return { erros: { username: "Invalid credentials", password: "" } };

  await createSession(existingUser._id.toString());

  redirect("/");
}
