
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  onNext: () => void;
};

export function DistanceInstructions({ onNext }: Props) {
  return (
    <div className="text-center space-y-8 flex flex-col items-center p-4 min-h-[500px] justify-center animate-fade-in">
       <Image
          src="/distance.webp"
          alt="Illustration of keeping distance from screen"
          width={150}
          height={100}
          data-ai-hint="distance screen"
        />

      <h2 className="font-headline text-4xl font-bold text-primary">
        Keep away.
      </h2>
      <p className="text-lg text-foreground max-w-sm">
        Keep your device at arm's length during the check.
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
