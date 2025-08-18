import Input from "@/components/ui/Input";
import React from "react";
import { HabitType } from "./habit.type";
import Card from "@/components/ui/Card";

interface HabitCardProps extends HabitType {
  isSelected: boolean;
  handleSelectHabit: (habitId: number) => void;
}

const HabitCard = ({
  id,
  isSelected,
  progressPercentage,
  streak,
  title,
  xp,
  handleSelectHabit,
}: HabitCardProps) => {
  return (
    <Card className="max-w-[280px]">
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        {/* exp bar */}
        <div className="w-full h-2 bg-light-gray">
          <div className="w-1/3 bg-custom-green rounded-full"></div>
        </div>
        <div className="flex items-center gap-11">
          <span>XP: +{xp}</span>
          <span>Streak: {streak}</span>
        </div>
      </div>
      <Input>
        <Input.Checkbox
          onChange={() => handleSelectHabit(id)}
          checked={isSelected}
        />
      </Input>
    </Card>
  );
};

export default HabitCard;
