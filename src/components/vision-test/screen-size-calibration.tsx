
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

type Props = {
  onNext: () => void;
};

// Standard credit card width in mm. We'll use this to calibrate.
const cardWidthMM = 85.6;
// Standard credit card height in mm.
const cardHeightMM = 53.98;
// A reasonable estimate for screen PPI (pixels per inch) to start with.
const initialPpi = 96;

export function ScreenSizeCalibration({ onNext }: Props) {
  // We'll store the scale factor, starting at 1.0.
  const [scale, setScale] = useState(100);

  // Convert mm to pixels
  const cardWidthPx = (cardWidthMM / 25.4) * initialPpi;
  const cardHeightPx = (cardHeightMM / 25.4) * initialPpi;

  const scaledWidth = cardWidthPx * (scale / 100);
  const scaledHeight = cardHeightPx * (scale / 100);

  return (
    <div className="text-center space-y-8 flex flex-col items-center p-4 min-h-[500px] justify-center animate-fade-in">
      <div
        className="border-2 border-dashed border-primary rounded-lg flex items-center justify-center p-4 transition-all duration-200"
        style={{ width: `${scaledWidth}px`, height: `${scaledHeight}px` }}
      >
        <p className="text-sm text-muted-foreground">
          Place any standard card here i.e. ID, credit or bank card.
        </p>
      </div>
      
      <div className="w-full max-w-sm pt-4">
        <Slider
          value={[scale]}
          onValueChange={(value) => setScale(value[0])}
          min={50}
          max={150}
          step={1}
        />
      </div>

      <p className="text-lg text-foreground max-w-sm">
        To adjust screen size place one of your cards on the dashed frame and
        use the slider to line them up.
      </p>

      <Button
        onClick={onNext}
        size="lg"
        className="transform hover:scale-110 transition-transform duration-200"
      >
        Next step
      </Button>
    </div>
  );
}
