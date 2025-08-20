export type HabitType = {
  id: string;
  title: string;
  progressPercentage: number;
  xp: number;
  streak: string;
};

export type HabitDetails = {
  id: string;
  title: string;
  description?: string;
  frequency: string;
  timesPerDay: number | null;
  reminder: boolean;
  remindTime?: string;
  xp: number;
  streak: string;
  progressPercentage: number;
};
