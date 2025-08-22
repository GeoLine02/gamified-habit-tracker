"use client";

import React, { useEffect, useState } from "react";
import { Line, Circle } from "rc-progress";

type ProgressBarProps = {
  percent: number; // target percentage (0-100)
  type?: "line" | "circle";
  strokeColor?: string;
  trailColor?: string;
  strokeWidth?: number;
  className?: string;
  duration?: number; // animation duration in ms
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  type = "line",
  strokeColor = "#22c55e",
  trailColor = "#e5e7eb",
  strokeWidth = 4,
  className,
  duration = 200, // default 0.2s
}) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const initial = animatedPercent;
    const delta = percent - initial;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setAnimatedPercent(initial + delta * progress);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [percent, duration, animatedPercent]);

  return (
    <div className={className}>
      {type === "line" ? (
        <Line
          percent={animatedPercent}
          strokeWidth={strokeWidth}
          strokeColor={strokeColor}
          trailColor={trailColor}
          trailWidth={3}
        />
      ) : (
        <Circle
          percent={animatedPercent}
          strokeWidth={strokeWidth}
          strokeColor={strokeColor}
          trailColor={trailColor}
        />
      )}
    </div>
  );
};

export default ProgressBar;
