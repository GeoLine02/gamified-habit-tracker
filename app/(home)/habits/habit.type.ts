export type HabitType = {
  id: string;
  title: string;
  progressPercentage: number;
  xp: number;
  streak: number;
  isCompleted: boolean;
};

export type HabitDetails = HabitType & {
  description?: string;
  frequency: string;
  timesPerDay: number;
  reminder: boolean;
  remindTime?: string;
};
