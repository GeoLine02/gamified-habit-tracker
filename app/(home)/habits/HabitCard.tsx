import React from "react";
import { HabitType } from "./habit.type";
import Card from "@/components/ui/Card";

type HabitCardProps = HabitType & {};

const HabitCard = ({
  id,
  progressPercentage,
  streak,
  title,
  xp,
}: HabitCardProps) => {
  return (
    <Card className="w-full md:max-w-[360px] cursor-pointer">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        {/* exp bar */}
        <div className="w-full h-2 bg-light-gray">
          <div className="w-1/3 bg-custom-green rounded-full"></div>
        </div>
        <div className="flex items-center gap-11 text-medium-gray font-medium">
          <span>XP: +{xp}</span>
          <span>Streak: {streak}</span>
        </div>
      </div>
    </Card>
  );
};

export default HabitCard;
