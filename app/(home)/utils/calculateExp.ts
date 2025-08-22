import { HabitDetails } from "../habits/habit.type";

export const calculateXP = (habit: HabitDetails) => {
  const streakDays = habit.streak;
  const baseXP = 10;
  const frequencyMultiplier =
    {
      daily: 1.0,
      weekly: 1.5,
      monthly: 2.0,
    }[habit.frequency] ?? 1.0;
  const timesMultiplier = habit.timesPerDay
    ? Math.max(1, habit.timesPerDay)
    : 1;
  const progressFactor =
    habit.progressPercentage > 0 ? habit.progressPercentage / 100 : 1;
  const streakBonusMultiplier = 1 + streakDays * 0.02;

  const earnedXP =
    baseXP *
    frequencyMultiplier *
    timesMultiplier *
    progressFactor *
    streakBonusMultiplier;

  return Math.round(earnedXP);
};
