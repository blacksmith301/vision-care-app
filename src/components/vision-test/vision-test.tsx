
"use client";

import { useState, useMemo } from "react";
import { Intro } from "./intro";
import { BrightnessInstructions } from "./brightness-instructions";
import { ScreenSizeCalibration } from "./screen-size-calibration";
import { PreparationInstructions } from "./preparation-instructions";
import { CoverEyeInstructions } from "./cover-eye-instructions";
import { CoverRightEyeInstructions } from "./cover-right-eye-instructions";
import { DistanceInstructions } from "./distance-instructions";
import { VisualAcuityTest } from "./visual-acuity-test";
import { MarkTheSpotInstructions } from "./mark-the-spot-instructions";
import { ContrastVisionTest } from "./contrast-vision-test";
import { AstigmatismTest } from "./astigmatism-test";
import { ColorVisionTest } from "./color-vision-test";
import { Results, type ResultsData } from "./results";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BothEyesOpenInstructions } from "./both-eyes-open-instructions";
import { VisualFieldTest } from "./visual-field-test";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Settings } from "lucide-react";

type TestStep =
  | "intro"
  | "brightness"
  | "screen-size"
  | "preparation"
  | "distance"
  | "mark-the-spot"
  | "cover-eye"
  | "visual-acuity-left"
  | "cover-right-eye"
  | "visual-acuity-right"
  | "cover-eye-contrast"
  | "contrast-vision-left"
  | "cover-right-eye-contrast"
  | "contrast-vision-right"
  | "cover-eye-astigmatism"
  | "astigmatism-left"
  | "cover-right-eye-astigmatism"
  | "astigmatism-right"
  | "cover-eye-visual-field"
  | "visual-field-left"
  | "cover-right-eye-visual-field"
  | "visual-field-right"
  | "both-eyes-open"
  | "color-vision"
  | "results";

export function VisionTest() {
  const [step, setStep] = useState<TestStep>("intro");
  const [results, setResults] = useState<ResultsData>({});

  const testSequence: TestStep[] = useMemo(() => [
    "intro",
    "brightness",
    "screen-size",
    "preparation",
    "distance",
    "mark-the-spot",
    "cover-eye",
    "visual-acuity-left",
    "cover-right-eye",
    "visual-acuity-right",
    "cover-eye-contrast",
    "contrast-vision-left",
    "cover-right-eye-contrast",
    "contrast-vision-right",
    "cover-eye-astigmatism",
    "astigmatism-left",
    "cover-right-eye-astigmatism",
    "astigmatism-right",
    "cover-eye-visual-field",
    "visual-field-left",
    "cover-right-eye-visual-field",
    "visual-field-right",
    "both-eyes-open",
    "color-vision",
    "results",
  ], []);

  const handleStart = () => {
    setStep("brightness");
  };

  const handleTestComplete = (testName: keyof ResultsData, result: string) => {
    const newResults = { ...results, [testName]: result };
    setResults(newResults);

    const currentStepIndex = testSequence.indexOf(step);
    if (currentStepIndex < testSequence.length - 1) {
      setStep(testSequence[currentStepIndex + 1]);
    }
  };
  
  const handleNextStep = () => {
    const currentStepIndex = testSequence.indexOf(step);
    if (currentStepIndex < testSequence.length - 1) {
      setStep(testSequence[currentStepIndex + 1]);
    }
  }

  const handleRestart = () => {
    setResults({});
    setStep("intro");
  };

  const renderStep = () => {
    switch (step) {
      case "intro":
        return <Intro onStart={handleStart} />;
      case "brightness":
        return <BrightnessInstructions onNext={handleNextStep} />;
      case "screen-size":
        return <ScreenSizeCalibration onNext={handleNextStep} />;
      case "preparation":
        return <PreparationInstructions onNext={handleNextStep} />;
      case "distance":
        return <DistanceInstructions onNext={handleNextStep} />;
      case "mark-the-spot":
        return <MarkTheSpotInstructions onNext={handleNextStep} />;
      case "cover-eye":
        return <CoverEyeInstructions onNext={handleNextStep} />;
      case "visual-acuity-left":
        return (
          <VisualAcuityTest
            eye="left"
            onComplete={(result) => handleTestComplete("visualAcuityLeft", result)}
          />
        );
      case "cover-right-eye":
        return <CoverRightEyeInstructions onNext={handleNextStep} />;
      case "visual-acuity-right":
        return (
          <VisualAcuityTest
            eye="right"
            onComplete={(result) => handleTestComplete("visualAcuityRight", result)}
          />
        );
      case "cover-eye-contrast":
        return <CoverEyeInstructions onNext={handleNextStep} />;
      case "contrast-vision-left":
        return (
          <ContrastVisionTest
            eye="left"
            onComplete={(result) => handleTestComplete("contrastLeft", result)}
          />
        );
      case "cover-right-eye-contrast":
        return <CoverRightEyeInstructions onNext={handleNextStep} />;
      case "contrast-vision-right":
        return (
          <ContrastVisionTest
            eye="right"
            onComplete={(result) => handleTestComplete("contrastRight", result)}
          />
        );
      case "cover-eye-astigmatism":
        return <CoverEyeInstructions onNext={handleNextStep} />;
      case "astigmatism-left":
        return (
          <AstigmatismTest
            eye="left"
            onComplete={(result) => handleTestComplete("astigmatismLeft", result)}
          />
        );
      case "cover-right-eye-astigmatism":
        return <CoverRightEyeInstructions onNext={handleNextStep} />;
      case "astigmatism-right":
        return (
          <AstigmatismTest
            eye="right"
            onComplete={(result) =>
              handleTestComplete("astigmatismRight", result)
            }
          />
        );
      case "cover-eye-visual-field":
        return <CoverEyeInstructions onNext={handleNextStep} />;
      case "visual-field-left":
        return (
          <VisualFieldTest
            eye="left"
            onComplete={(result) =>
              handleTestComplete("visualFieldLeft", result)
            }
          />
        );
      case "cover-right-eye-visual-field":
        return <CoverRightEyeInstructions onNext={handleNextStep} />;
      case "visual-field-right":
        return (
          <VisualFieldTest
            eye="right"
            onComplete={(result) =>
              handleTestComplete("visualFieldRight", result)
            }
          />
        );
      case "both-eyes-open":
        return <BothEyesOpenInstructions onNext={handleNextStep} />;
      case "color-vision":
        return (
          <ColorVisionTest
            onComplete={(result) => handleTestComplete("colorVision", result)}
          />
        );
      case "results":
        return <Results results={results} onRestart={handleRestart} />;
      default:
        return <Intro onStart={handleStart} />;
    }
  };

  const QuickNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 right-4 z-50 h-12 w-12 rounded-full shadow-lg">
          <Settings className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Developer Quick Nav</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2 py-4">
          {testSequence.map((testStep) => (
            <Button
              key={testStep}
              onClick={() => setStep(testStep)}
              variant="ghost"
              className={cn(
                "capitalize justify-start",
                step === testStep ? "bg-primary text-primary-foreground" : ""
              )}
            >
              {testStep.replace(/-/g, " ")}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="w-full max-w-3xl">
      {/* <QuickNav /> */}
      {renderStep()}
    </div>
  );
}
