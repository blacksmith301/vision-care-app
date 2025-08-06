
"use client";

import { Button } from "@/components/ui/button";
import { Eye, Info } from "lucide-react";

type Props = {
  onStart: () => void;
};

export function Intro({ onStart }: Props) {
  return (
    <div className="text-center space-y-8 flex flex-col items-center p-4">
      <div className="p-4 bg-accent/20 rounded-full animate-pulse">
        <Eye className="w-16 h-16 text-primary" />
      </div>
      <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary">
        Vision Care EyeTest
      </h1>
      <p className="text-lg text-foreground max-w-xl">
        Welcome to the Vision Care online eye screening. This is a quick and simple way to check your vision from the comfort of your home.
      </p>
      <div className="w-full max-w-md p-4 bg-secondary border-l-4 border-primary rounded-r-lg text-left space-y-2">
        <div className="flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          <p className="font-headline font-semibold text-primary">Please Note</p>
        </div>
        <p className="text-sm text-muted-foreground">
          This test is not a substitute for a professional medical diagnosis. For a complete assessment of your eye health, please consult our eye care professional at Vision Care.
        </p>
      </div>
      <Button
        onClick={onStart}
        size="lg"
        className="transform hover:scale-110 transition-transform duration-200"
      >
        Start Screening
      </Button>
    </div>
  );
}
