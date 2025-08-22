"use client";

import Card from "@/components/ui/Card";
import { useHabitsContext } from "@/context/HabitsContext";
import { FaPlus } from "react-icons/fa6";

const NewHabitBtn = () => {
  const { onToggleNewHabitModal } = useHabitsContext();

  return (
    <Card
      onClick={onToggleNewHabitModal}
      aria-labelledby="open new habit modal button"
      className="text-medium-gray font-semibold flex items-center cursor-pointer gap-2 justify-center"
    >
      <FaPlus size={25} />
      <span className="text-xl">Add New Habit</span>
    </Card>
  );
};

export default NewHabitBtn;
