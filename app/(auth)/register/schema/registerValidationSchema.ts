import { z } from "zod";

export const registerValidationSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must be at most 50 characters"),
    repeatPassword: z.string().min(6, "Repeat password is required"),
    gender: z.enum(["male", "female"]), // just the tuple
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords must match",
    path: ["repeatPassword"], // attach error to repeatPassword field
  });
