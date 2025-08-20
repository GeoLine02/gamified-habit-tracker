import { z } from "zod";

export const habitSchema = z.object({
  id: z.string().uuid().optional(), // generated internally
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  timesPerDay: z.preprocess(
    (val) => Number(val),
    z.number().int().min(1, "Must be at least 1")
  ),
  reminder: z.boolean().default(false),
  remindTime: z.string("remainder time is required"),
});

export type HabitFormSchema = z.infer<typeof habitSchema>;
