import { HabitType } from "@/app/(home)/components/habits/habit.type";

export interface UserType {
  username: string;
  password: string;
  gender: "female" | "male";
  profilePhoto: string;
  level: number;
  totalXp: number;
  longestStreak: number;
  habites: HabitType[];
}
