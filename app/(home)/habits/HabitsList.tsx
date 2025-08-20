"use client";

import { useHabitsContext } from "@/context/HabitsContext";
import HabitCard from "./HabitCard";

const HabitsList = () => {
  const { habits } = useHabitsContext();

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
