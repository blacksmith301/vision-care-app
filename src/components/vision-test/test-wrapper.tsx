import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface TestWrapperProps {
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
}

export const TestWrapper = ({
  title,
  description,
  children,
}: TestWrapperProps) => {
  return (
    <div className="w-full animate-fade-in">
        <div className="mb-4">
            <h2 className="font-headline text-primary text-3xl text-left">{title}</h2>
            <p className="text-left text-muted-foreground">{description}</p>
        </div>
        <Card className="w-full shadow-2xl">
            <CardContent className="flex flex-col items-center justify-center space-y-6 min-h-[400px] p-6">
                {children}
            </CardContent>
        </Card>
    </div>
  );
};
