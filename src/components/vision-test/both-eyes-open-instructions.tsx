
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  onNext: () => void;
};

export function BothEyesOpenInstructions({ onNext }: Props) {
  return (
    <div className="text-center space-y-8 flex flex-col items-center p-4 min-h-[500px] justify-center animate-fade-in">
      <Image
        src="/eyeopen.png"
        alt="Illustration of an open eye"
        width={150}
        height={150}
        data-ai-hint="open eye"
      />
      <h2 className="font-headline text-4xl font-bold text-primary">
        Both eyes open.
      </h2>
      <p className="text-lg text-foreground max-w-sm">
        For the next tests, please keep both of your eyes open.
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
