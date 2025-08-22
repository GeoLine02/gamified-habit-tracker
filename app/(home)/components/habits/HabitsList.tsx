"use client";

import { useHabitsContext } from "@/context/HabitsContext";
import HabitCard from "./HabitCard";
import { useLocalStorage } from "@/components/shared/hooks/useLocalStorage";
import { useState } from "react";

const HabitsList = () => {
  const { habits, setHabits } = useHabitsContext();
  const { setItem } = useLocalStorage("habits");

  // temp checked state for flash effect
  const [flashCheckedId, setFlashCheckedId] = useState<string | null>(null);

  const calculateProgress = (
    progressPercentage: number,
    timesPerDay: number
  ) => {
    return Math.min(100, progressPercentage + Math.ceil(100 / timesPerDay));
  };

  const onCompleteHabit = (id: string) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id && !habit.isCompleted) {
        const newProgress = calculateProgress(
          habit.progressPercentage,
          habit.timesPerDay
        );

        return {
          ...habit,
          progressPercentage: newProgress,
          streak: newProgress === 100 ? habit.streak + 1 : habit.streak,
          isCompleted: newProgress === 100 ? true : false,
        };
      }
      return habit;
    });

    setHabits(updatedHabits);
    setItem(updatedHabits);

    // flash check for 1 second
    setFlashCheckedId(id);
    setTimeout(() => setFlashCheckedId(null), 1000);
  };

  return (
    <div className="flex flex-col gap-4 flex-1">
      <h1 className="text-2xl font-semibold">Your Habits</h1>
      {!habits ||
        (!habits.length && (
          <div className="flex-1">
            <h1 className="text-3xl font-semibold">Habits Not Found</h1>
          </div>
        ))}
      <div className="flex flex-col gap-4">
        {habits &&
          habits.map((habit) => (
            <HabitCard
              onCompleteHabit={onCompleteHabit}
              key={habit.id}
              id={habit.id}
              progressPercentage={habit.progressPercentage}
              streak={habit.streak}
              title={habit.title}
              xp={habit.xp}
              isCompleted={
                habit.progressPercentage === 100 || flashCheckedId === habit.id
              }
            />
          ))}
      </div>
    </div>
  );
};

export default HabitsList;
