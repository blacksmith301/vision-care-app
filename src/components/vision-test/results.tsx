"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, Repeat } from "lucide-react";

export type ResultsData = {
  visualAcuityLeft?: string;
  visualAcuityRight?: string;
  contrastLeft?: string;
  contrastRight?: string;
  astigmatismLeft?: string;
  astigmatismRight?: string;
  visualFieldLeft?: string;
  visualFieldRight?: string;
  colorVision?: string;
};

type Props = {
  results: ResultsData;
  onRestart: () => void;
};

const formatTitle = (key: string) => {
  if (key === "visualAcuityLeft") return "Visual Acuity (Left Eye)";
  if (key === "visualAcuityRight") return "Visual Acuity (Right Eye)";
  if (key === "contrastLeft") return "Contrast Vision (Left Eye)";
  if (key === "contrastRight") return "Contrast Vision (Right Eye)";
  if (key === "astigmatismLeft") return "Astigmatism (Left Eye)";
  if (key === "astigmatismRight") return "Astigmatism (Right Eye)";
  if (key === "visualFieldLeft") return "Visual Field (Left Eye)";
  if (key === "visualFieldRight") return "Visual Field (Right Eye)";
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
};

const getResultStatus = (
  testKey: keyof ResultsData,
  result: string | undefined
): "good" | "bad" => {
  if (!result) return "bad";

  switch (testKey) {
    case "visualAcuityLeft":
    case "visualAcuityRight":
      return result.includes("Excellent") ||
        (result.includes("Correct: ") &&
          parseInt(result.split("Correct: ")[1].split(",")[0]) >= 8)
        ? "good"
        : "bad";

    case "contrastLeft":
    case "contrastRight":
      return result.includes("Excellent") ||
        (result.includes("Correct: ") &&
          parseInt(result.split("Correct: ")[1].split(",")[0]) >= 5)
        ? "good"
        : "bad";

    case "astigmatismLeft":
    case "astigmatismRight":
      return result.includes("No signs") ? "good" : "bad";

    case "visualFieldLeft":
    case "visualFieldRight":
      return !result.includes("recommend") ? "good" : "bad";

    case "colorVision":
      return result.includes("normal") ? "good" : "bad";

    default:
      return "bad";
  }
};

export function Results({ results, onRestart }: Props) {
  return (
    <Card className="w-full max-w-2xl shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-4xl text-primary">
          Your Results
        </CardTitle>
        <CardDescription>
          Here is a summary of your vision screening. This is not a medical diagnosis.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(results).map(([key, value]) => {
          if (!value) return null;
          const status = getResultStatus(key as keyof ResultsData, value);
          const title = formatTitle(key);

          return (
            <div key={key} className="flex items-start gap-4 rounded-lg border p-4">
              {status === "good" ? (
                <CheckCircle2 className="h-8 w-8 text-green-500 mt-1 flex-shrink-0" />
              ) : (
                <AlertTriangle className="h-8 w-8 text-yellow-500 mt-1 flex-shrink-0" />
              )}
              <div>
                <h3 className="font-bold text-lg font-headline text-primary">{title}</h3>
                <p className="text-muted-foreground">{value}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
      <CardFooter className="flex-col gap-4 pt-6">
        <p className="text-center">
          For a comprehensive eye examination and personalized advice, book an appointment with our experts.
        </p>
        <Button
          asChild
          size="lg"
          className="w-full transform hover:scale-110 transition-transform duration-200"
        >
          <a
            href="https://visioncare.lk/book-appointment/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book an Appointment at Vision Care.lk
          </a>
        </Button>
        <Button variant="ghost" onClick={onRestart} className="flex items-center gap-2">
          <Repeat className="h-4 w-4" />
          Take the Test Again
        </Button>
      </CardFooter>
    </Card>
  );
}
