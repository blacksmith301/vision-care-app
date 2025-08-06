
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TestWrapper } from "./test-wrapper";
import { cn } from "@/lib/utils";

type Props = {
  onNext: () => void;
};

export function MarkTheSpotInstructions({ onNext }: Props) {
    return (
        <TestWrapper
            title="Mark the spot."
            description={
                <>
                See the top ring? Mark the corresponding spot on the lower ring.
                </>
            }
        >
          <div className="flex flex-col items-center justify-center space-y-8 h-[350px]">
              <Image
                src="https://visionscreening.zeiss.com/assets/images/acuity-instruction.gif"
                alt="Instructional GIF for visual acuity test"
                width={300}
                height={200}
                unoptimized
                data-ai-hint="visual acuity instructions"
              />
          </div>
          <Button 
            onClick={onNext} 
            size="lg" 
            className="mt-4 transform hover:scale-110 transition-transform duration-200"
          >
              I'm ready
          </Button>
        </TestWrapper>
    )
}
