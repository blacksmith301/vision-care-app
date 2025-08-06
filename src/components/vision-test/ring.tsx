
"use client";

import React from "react";
import { cn } from "@/lib/utils";

type RingProps = {
  onSegmentClick: (angle: number) => void;
  isTarget?: boolean;
  targetAngle?: number;
  isContrastTest?: boolean;
};

export function Ring({ onSegmentClick, isTarget = false, targetAngle, isContrastTest = false }: RingProps) {
  const segments = 8;
  const radius = 100;
  const strokeWidth = 40;
  const center = radius;

  const getSegmentPath = (index: number) => {
    const startAngle = (index * 360) / segments - 90 - 2; // Start from top, add gap
    const endAngle = ((index + 1) * 360) / segments - 90 - 2; // End at next segment

    const start = {
      x: center + radius * Math.cos((startAngle * Math.PI) / 180),
      y: center + radius * Math.sin((startAngle * Math.PI) / 180),
    };
    const end = {
      x: center + radius * Math.cos((endAngle * Math.PI) / 180),
      y: center + radius * Math.sin((endAngle * Math.PI) / 180),
    };

    const innerStart = {
      x: center + (radius - strokeWidth) * Math.cos((startAngle * Math.PI) / 180),
      y: center + (radius - strokeWidth) * Math.sin((startAngle * Math.PI) / 180),
    }

    const innerEnd = {
        x: center + (radius - strokeWidth) * Math.cos((endAngle * Math.PI) / 180),
        y: center + (radius - strokeWidth) * Math.sin((endAngle * Math.PI) / 180),
    }

    const largeArcFlag = (endAngle-2) - (startAngle+2) <= 180 ? "0" : "1";

    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y} L ${innerEnd.x} ${innerEnd.y} A ${radius - strokeWidth} ${radius - strokeWidth} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y} Z`;
  };

  const segmentAngles = [270, 315, 0, 45, 90, 135, 180, 225];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      <g>
        {Array.from({ length: segments }).map((_, i) => {
          const angle = segmentAngles[i];
          const isGap = isTarget && angle === targetAngle;
          
          let fillColor = 'black';
          if (isGap) {
            fillColor = 'white';
          }

          if (isContrastTest && isTarget && !isGap) {
            fillColor = 'black';
          }

          return (
            <path
              key={i}
              d={getSegmentPath(i)}
              fill={fillColor}
              stroke="white"
              strokeWidth={2}
              className={cn(
                !isTarget && "cursor-pointer transition-opacity hover:opacity-80"
              )}
              onClick={() => !isTarget && onSegmentClick(angle)}
            />
          );
        })}
      </g>
    </svg>
  );
}
