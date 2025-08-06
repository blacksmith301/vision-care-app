
"use client";

import { useState, useMemo, useEffect } from "react";
import { TestWrapper } from "./test-wrapper";
import { Ring } from "./ring";
import { Check, X } from "lucide-react";

type Props = {
  eye: 'left' | 'right';
  onComplete: (result: string) => void;
};

const MAX_LEVEL = 10;
const MAX_INCORRECT_ATTEMPTS = 15;
const directions = [0, 45, 90, 135, 180, 225, 270, 315];

export function VisualAcuityTest({ eye, onComplete }: Props) {
  const [level, setLevel] = useState(1);
  const [totalIncorrect, setTotalIncorrect] = useState(0);
  const [rotation, setRotation] = useState(directions[Math.floor(Math.random() * directions.length)]);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);

  const getRandomRotation = (currentRotation: number) => {
    let newRotation;
    do {
      newRotation = directions[Math.floor(Math.random() * directions.length)];
    } while (newRotation === currentRotation);
    return newRotation;
  };
  
  const setNextRotation = () => {
    setRotation(prevRotation => getRandomRotation(prevRotation));
  };


  const handleAnswer = (selectedDirection: number) => {
    if (feedback) return;

    if (selectedDirection === rotation) {
      setFeedback("correct");
      setTimeout(() => {
        if (level < MAX_LEVEL) {
          setLevel(level + 1);
          setNextRotation();
          setFeedback(null);
        } else {
          const result = `Vision test complete. Correct: ${level}, Incorrect: ${totalIncorrect}.`;
          onComplete(result);
        }
      }, 1000);
    } else {
      setFeedback("incorrect");
      const newTotalIncorrect = totalIncorrect + 1;
      setTotalIncorrect(newTotalIncorrect);
      setTimeout(() => {
        if (newTotalIncorrect >= MAX_INCORRECT_ATTEMPTS) {
          const result = `Vision test complete. Correct: ${level}, Incorrect: ${newTotalIncorrect}. We recommend a professional check.`;
          onComplete(result);
        } else {
          setNextRotation();
          setFeedback(null);
        }
      }, 1000);
    }
  };

  const topRingSize = useMemo(() => {
    const startSize = 40;
    const endSize = 3;
    const sizeRange = startSize - endSize;
    const stepValue = sizeRange / (MAX_LEVEL - 1);
    return startSize - (level - 1) * stepValue;
  }, [level]);

  return (
    <div className="w-full animate-fade-in">
      <div className="mb-10">
        <h2 className="font-headline text-primary text-3xl text-left">
          Visual acuity
        </h2>
        <div className="text-left text-muted-foreground whitespace-nowrap">
        <ol className="list-decimal list-inside space-y-1">
            <li>Cover your <b>{eye === 'left' ? 'right' : 'left'}</b> eye.</li>
            <li>Keep your device at <b>arm's length.</b></li>
            <li>See the gap in the top ring? Mark the corresponding spot on the lower ring.</li>
        </ol>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center space-y-12 py-8 bg-white rounded-lg shadow-2xl min-h-[400px]">
        <div className="h-[100px] flex items-center justify-center">
          <div
            className="transition-all duration-300 flex items-center justify-center"
            style={{
              width: `${topRingSize}px`,
              height: `${topRingSize}px`,
            }}
          >
            <Ring
              onSegmentClick={() => {}}
              isTarget={true}
              targetAngle={rotation}
            />
          </div>
        </div>

        <div className="relative">
          <Ring onSegmentClick={handleAnswer} />
          {feedback === "correct" && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Check className="w-24 h-24 text-green-500 bg-white/80 rounded-full p-2" />
            </div>
          )}
          {feedback === "incorrect" && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <X className="w-24 h-24 text-red-500 bg-white/80 rounded-full p-2" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
