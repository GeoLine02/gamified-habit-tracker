"use client";

import { HabitType } from "./habit.type";
import HabitCard from "./HabitCard";
import { useLocalStorage } from "@/components/shared/hooks/useLocalStorage";

const HabitsList = () => {
  const [habits, setHabits] = useLocalStorage<HabitType[]>("habits", []);

  const handleSelectHabit = (habitId: number) => {
    setHabits(
      habits.map((habit) =>
        habit.id === habitId ? { ...habit, isSelectd: true } : habit
      )
    );
  };

  return (
    <div className="flex flex-col gap-4 flex-1">
      <h1 className="text-2xl font-semibold">Your Habits</h1>
      {!habits && (
        <div className="flex-1">
          <h1 className="text-3xl font-semibold">Habits Not Found</h1>
        </div>
      )}
      <div>
        {habits &&
          habits.map((habit) => (
            <HabitCard
              handleSelectHabit={handleSelectHabit}
              isSelected={habit.isSelected}
              key={habit.id}
              id={habit.id}
              progressPercentage={habit.progressPercentage}
              streak={habit.streak}
              title={habit.title}
              xp={habit.xp}
            />
          ))}
      </div>
    </div>
  );
};

export default HabitsList;
