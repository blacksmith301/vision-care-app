
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TestWrapper } from "./test-wrapper";

type Props = {
  eye: 'left' | 'right';
  onComplete: (result: string) => void;
};

export function AstigmatismTest({ eye, onComplete }: Props) {
  const [selection, setSelection] = useState<string | null>(null);

  const handleSelection = (answer: string) => {
    setSelection(answer);
    let result;
    if (answer === "Yes") {
      result = "You may have astigmatism. We recommend a professional check.";
    } else {
      result = "No signs of astigmatism detected.";
    }
    
    setTimeout(() => onComplete(result), 500);
  };

  const AstigmatismChart = () => (
    <div className="w-[300px] h-[300px] flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="335" height="177.5" viewBox="0 0 335 177.5">
            <g transform="translate(-707 -1705.5)">
                <rect width="110" height="4" transform="translate(707 1879)"></rect>
                <rect width="110" height="4" transform="translate(707 1871)"></rect>
                <rect width="110" height="4" transform="translate(707 1863)"></rect>
            </g>
            <g transform="translate(-482 -1705.5)">
                <rect width="110" height="4" transform="translate(707 1879)"></rect>
                <rect width="110" height="4" transform="translate(707 1871)"></rect>
                <rect width="110" height="4" transform="translate(707 1863)"></rect>
            </g>
            <g transform="rotate(22.5 4808.063 -756.916)">
                <rect width="110" height="4" transform="translate(707 1879)"></rect>
                <rect width="110" height="4" transform="translate(707 1871)"></rect>
                <rect width="110" height="4" transform="translate(707 1863)"></rect>
            </g>
            <g transform="rotate(45 2579.72 166.825)">
                <rect width="110" height="4" transform="translate(707 1879)"></rect>
                <rect width="110" height="4" transform="translate(707 1871)"></rect>
                <rect width="110" height="4" transform="translate(707 1863)"></rect>
            </g>
            <g transform="rotate(90 1373.75 666.75)">
                <rect width="110" height="4" transform="translate(707 1879)"></rect>
                <rect width="110" height="4" transform="translate(707 1871)"></rect>
                <rect width="110" height="4" transform="translate(707 1863)"></rect>
            </g>
            <g transform="rotate(67.5 1797.23 491.2)">
                <rect width="110" height="4" transform="translate(707 1879)"></rect>
                <rect width="110" height="4" transform="translate(707 1871)"></rect>
                <rect width="110" height="4" transform="translate(707 1863)"></rect>
            </g>
            <g transform="rotate(-22.5 -3878.565 2231.839)">
                <rect width="110" height="4" transform="translate(707 1879)"></rect>
                <rect width="110" height="4" transform="translate(707 1871)"></rect>
                <rect width="110" height="4" transform="translate(707 1863)"></rect>
            </g>
            <g transform="rotate(-45 -1650.221 1602.077)">
                <rect width="110" height="4" transform="translate(707 1879)"></rect>
                <rect width="110" height="4" transform="translate(707 1871)"></rect>
                <rect width="110" height="4" transform="translate(707 1863)"></rect>
            </g>
            <g transform="rotate(-67.5 -867.731 1380.931)">
                <rect width="110" height="4" transform="translate(707 1879)"></rect>
                <rect width="110" height="4" transform="translate(707 1871)"></rect>
                <rect width="110" height="4" transform="translate(707 1863)"></rect>
            </g>
        </svg>
    </div>
  );


  return (
    <TestWrapper
      title="Astigmatism Test"
      description={<>Cover your <b>{eye === 'left' ? 'right' : 'left'}</b> eye. Look at the fan of lines. Are any of the lines clearer, sharper or darker than others?</>}
    >
      <div className="flex flex-col gap-8 w-full items-center justify-center">
        <AstigmatismChart />
        <div className="flex gap-4">
          <Button
            onClick={() => handleSelection("Yes")}
            size="lg"
            variant={selection === 'Yes' ? 'default' : 'outline'}
            disabled={!!selection}
            className="w-32"
          >
            Yes
          </Button>
          <Button
            onClick={() => handleSelection("No")}
            size="lg"
            variant={selection === 'No' ? 'default' : 'outline'}
            disabled={!!selection}
            className="w-32"
          >
            No
          </Button>
        </div>
      </div>
    </TestWrapper>
  );
}
