
"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TestWrapper } from "./test-wrapper";
import { COLOR_VISION_PLATES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Props = {
  onComplete: (result: string) => void;
};

export function ColorVisionTest({ onComplete }: Props) {
  const [currentPlateIndex, setCurrentPlateIndex] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [backgroundHue, setBackgroundHue] = useState(10); // Start with red

  useEffect(() => {
    // Change background color for each plate, but not green (60-160)
    let newHue;
    do {
      newHue = Math.random() * 360;
    } while (newHue > 60 && newHue < 160);
    setBackgroundHue(newHue);
  }, [currentPlateIndex]);


  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    
    const isCorrect = answer === COLOR_VISION_PLATES[currentPlateIndex].answer;
    const newAnswers = [...answers, isCorrect];
    
    setTimeout(() => {
      setAnswers(newAnswers);
      setSelectedAnswer(null);

      if (currentPlateIndex < COLOR_VISION_PLATES.length - 1) {
        setCurrentPlateIndex(currentPlateIndex + 1);
      } else {
        const correctCount = newAnswers.filter(Boolean).length;
        const result =
          correctCount === COLOR_VISION_PLATES.length
            ? "Your color vision appears to be normal."
            : `You answered ${correctCount} out of ${COLOR_VISION_PLATES.length} correctly.`;
        onComplete(result);
      }
    }, 500);
  };

  const currentPlate = COLOR_VISION_PLATES[currentPlateIndex];

  const circles = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      size: Math.random() * 40 + 10,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.4 + 0.3,
    }));
  }, [currentPlateIndex]);


  return (
    <TestWrapper
      title="Color Vision Test"
      description="Click the button corresponding to the number you see in the image. If you don't see a number, click 'Nothing'."
    >
      <div className="relative w-[300px] h-[300px] bg-white rounded-full overflow-hidden shadow-lg border-4 border-white">
        <div className="absolute inset-0 w-full h-full">
            {circles.map(circle => (
                <div
                    key={circle.id}
                    className="absolute rounded-full"
                    style={{
                        width: `${circle.size}px`,
                        height: `${circle.size}px`,
                        top: `${circle.top}%`,
                        left: `${circle.left}%`,
                        transform: 'translate(-50%, -50%)',
                        opacity: circle.opacity,
                        backgroundColor: `hsl(${backgroundHue}, ${Math.random() * 30 + 60}%, ${Math.random() * 20 + 40}%)`
                    }}
                ></div>
            ))}
        </div>
        <div 
          className="absolute inset-0 flex items-center justify-center text-8xl font-bold"
          style={{
            color: `hsl(90, ${Math.random() * 30 + 50}%, ${Math.random() * 20 + 45}%)`,
            WebkitMaskImage: 'radial-gradient(circle at center, white 40%, transparent 70%)',
            maskImage: 'radial-gradient(circle at center, white 40%, transparent 70%)',
            opacity: 0.5,
          }}
        >
          {/* This is a visual trick to make text look like it's composed of dots */}
          <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,black_2px,transparent_2.5px)] bg-repeat bg-[length:9px_9px] mix-blend-overlay opacity-80"></div>
          {currentPlate.answer}
        </div>
    </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center pt-6">
        {currentPlate.options.map((option) => (
          <Button
            key={option}
            onClick={() => handleAnswerSelect(option)}
            variant="outline"
            className={cn(
                "w-24 h-16 text-xl border-2",
                selectedAnswer === option && currentPlate.answer === option && "bg-green-200 border-green-500",
                selectedAnswer === option && currentPlate.answer !== option && "bg-red-200 border-red-500",
            )}
            disabled={selectedAnswer !== null}
          >
            {option}
          </Button>
        ))}
      </div>
    </TestWrapper>
  );
}
