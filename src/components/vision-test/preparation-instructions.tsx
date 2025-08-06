
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  onNext: () => void;
};

export function PreparationInstructions({ onNext }: Props) {
  return (
    <div className="text-center space-y-8 flex flex-col items-center p-4 min-h-[500px] justify-center animate-fade-in">
      <div className="flex items-center justify-center gap-4 text-primary">
        <Image
          key={new Date().getTime()}
          src="/glasses.webp"
          alt="Glasses and contact lens"
          width={180}
          height={80}
          data-ai-hint="glasses contact lens"
        />
      </div>
      <h2 className="font-headline text-4xl font-bold text-primary">
        Be prepared.
      </h2>
      <p className="text-lg text-foreground max-w-sm">
        Wear your glasses or contacts (if you have any).
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
