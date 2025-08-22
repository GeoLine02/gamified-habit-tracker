import React from "react";
import { HabitType } from "./habit.type";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";
import Input from "@/components/ui/Input";

type HabitCardProps = HabitType & {
  onCompleteHabit: (id: string) => void;
};

const HabitCard = ({
  id,
  progressPercentage,
  streak,
  title,
  xp,
  isCompleted,
  onCompleteHabit,
}: HabitCardProps) => {
  return (
    <Card className="w-full md:max-w-[360px] cursor-pointer flex items-center gap-4 justify-between">
      <div className="flex flex-col gap-3 w-full">
        <h1 className="text-xl font-semibold">{title}</h1>
        {/* exp bar */}
        <ProgressBar percent={progressPercentage} />
        <div className="flex items-center gap-11 text-medium-gray font-medium">
          <span>XP: +{xp}</span>
          <span>Streak: {streak}</span>
        </div>
      </div>

      <Input>
        <Input.Checkbox
          onChange={() => onCompleteHabit(id)}
          checked={isCompleted}
        />
      </Input>
    </Card>
  );
};

export default HabitCard;
