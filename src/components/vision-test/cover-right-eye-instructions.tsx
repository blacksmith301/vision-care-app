
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  onNext: () => void;
};

export function CoverRightEyeInstructions({ onNext }: Props) {
  return (
    <div className="text-center space-y-8 flex flex-col items-center p-4 min-h-[500px] justify-center animate-fade-in">
      <Image
        src="/Righteye.gif"
        alt="Animation showing covering one eye"
        width={150}
        height={150}
        unoptimized
        data-ai-hint="eye animation"
      />
      <h2 className="font-headline text-4xl font-bold text-primary">
        Eyes ready?
      </h2>
      <p className="text-lg text-foreground max-w-sm">
        Now, cover your right eye and let's test the left.
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
