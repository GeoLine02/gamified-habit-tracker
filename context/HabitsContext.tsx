"use client";

import { HabitType } from "@/app/(home)/habits/habit.type";
import { useLocalStorage } from "@/components/shared/hooks/useLocalStorage";
import { createContext, useContext, useState } from "react";

interface HabitsContextType {
  habits: HabitType[];
  setHabits: (newValue: HabitType[]) => void;
  onToggleNewHabitModal: () => void;
  isHabitsModalOpen: boolean;
}

const HabitsContext = createContext<HabitsContextType | undefined>(undefined);

export const HabitsProvider = ({ children }: { children: React.ReactNode }) => {
  const [habits, setHabits] = useLocalStorage<HabitType[]>("habits", []);
  const [isHabitsModalOpen, setIsHabitsModalOpen] = useState(false);

  const onToggleNewHabitModal = () => {
    setIsHabitsModalOpen(!isHabitsModalOpen);
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
