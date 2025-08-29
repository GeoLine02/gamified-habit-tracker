import { HabitType } from "@/app/(home)/components/habits/habit.type";

export interface UserLoginCredsType {
  username: string;
  password: string;
}

export interface UserRegisterCredsType extends UserLoginCredsType {
  repeatPassword: string;
  gender: "male" | "female" | null;
}

export interface UserType {
  username: string;
  password: string;
  gender: "female" | "male" | null;
  profilePhoto: string;
  level: number;
  totalXp: number;
  longestStreak: number;
  habites: HabitType[];
}
