"use client";

import { HabitDetails } from "@/app/(home)/components/habits/habit.type";
import { useLocalStorage } from "@/components/shared/hooks/useLocalStorage";
import { createContext, useContext, useEffect, useState } from "react";

interface HabitsContextType {
  habits: HabitDetails[];
  setHabits: (newValue: HabitDetails[]) => void;
  onToggleNewHabitModal: () => void;
  isHabitsModalOpen: boolean;
}

const HabitsContext = createContext<HabitsContextType | undefined>(undefined);

export const HabitsProvider = ({ children }: { children: React.ReactNode }) => {
  const { getItem } = useLocalStorage<HabitDetails[]>("habits");

  // 1️⃣ Always start with an empty array to avoid SSR/client mismatch
  const [habits, setHabits] = useState<HabitDetails[]>([]);

  const [isHabitsModalOpen, setIsHabitsModalOpen] = useState(false);

  // 2️⃣ Hydrate client-side from localStorage after mount
  useEffect(() => {
    const stored = getItem();
    if (stored) setHabits(stored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onToggleNewHabitModal = () => {
    setIsHabitsModalOpen((prev) => !prev);
  };

  return (
    <HabitsContext.Provider
      value={{ habits, setHabits, onToggleNewHabitModal, isHabitsModalOpen }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabitsContext = () => {
  const context = useContext(HabitsContext);

  if (!context) {
    throw new Error("useHabits must be used within HabitsProvider");
  }
  return context;
};
