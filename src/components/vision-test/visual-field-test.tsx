
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TestWrapper } from './test-wrapper';

type Props = {
  eye: 'left' | 'right';
  onComplete: (result: string) => void;
};

const TOTAL_DOTS = 10;
const DOT_DISPLAY_TIME = 1000; // 1 second
const GRID_SIZE = 20; // 20x20 grid

const VisualFieldGrid = () => (
    <svg viewBox="0 0 282 282" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" style={{ width: '100%', maxWidth: '400px' }}>
        <g transform="translate(-14.598 -14.645)" stroke="#000">
            <path d="M14.598 296.644V14.598" fill="none" strokeWidth=".85"></path>
            <path d="M296.645 296.644H14.598" fill="none" strokeWidth=".85"></path>
            <path d="M296.645 14.598v282.046" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 14.598h282.047" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 28.709l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 42.809l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 56.913l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 71.013l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 85.112l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 99.209l282.047-.002" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 113.31l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 127.414l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 141.518l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 155.622l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 169.726l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 183.824l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 197.925l282.047-.002" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 212.033l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 226.134l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 240.232l282.047-.002" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 254.339l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 268.439l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M14.598 282.536l282.047-.003" fill="none" strokeWidth=".85"></path>
            <path d="M28.709 296.641l-.003-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M42.806 296.641l-.002-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M56.906 296.641l-.003-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M71.013 296.641L71.01 14.598" fill="none" strokeWidth=".85"></path>
            <path d="M85.112 296.641L85.11 14.598" fill="none" strokeWidth=".85"></path>
            <path d="M99.213 296.641L99.21 14.598" fill="none" strokeWidth=".85"></path>
            <path d="M113.321 296.641l-.003-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M127.423 296.641l-.003-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M141.521 296.641l-.002-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M155.625 296.641l-.003-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M169.73 296.641l-.003-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M183.833 296.641l-.003-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M197.935 296.641l-.002-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M212.038 296.641l-.003-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M226.135 296.641l-.003-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M240.238 296.641l-.003-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M254.335 296.641l-.003-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M268.437 296.641l-.003-282.043" fill="none" strokeWidth=".85"></path>
            <path d="M282.54 296.641l-.003-282.043" fill="none" strokeWidth=".85"></path>
            <circle cx="155.624" cy="155.621" strokeWidth="2.18" r="6.707"></circle>
        </g>
    </svg>
);

export function VisualFieldTest({ eye, onComplete }: Props) {
  const [dotPosition, setDotPosition] = useState<{ x: number; y: number } | null>(null);
  const [dotsShown, setDotsShown] = useState(0);
  const [dotsSeen, setDotsSeen] = useState(0);
  const [testStarted, setTestStarted] = useState(false);
  const [dotClicked, setDotClicked] = useState(false);

  const startTest = () => {
    setTestStarted(true);
    setDotsShown(0);
    setDotsSeen(0);
  }

  useEffect(() => {
    if (testStarted && dotsShown < TOTAL_DOTS) {
      const timer = setTimeout(() => {
        const x = Math.floor(Math.random() * GRID_SIZE);
        const y = Math.floor(Math.random() * GRID_SIZE);
        
        // Ensure dot is not in the very center (e.g., a 4x4 central area)
        if (x > GRID_SIZE/2 - 2 && x < GRID_SIZE/2 + 2 && y > GRID_SIZE/2 - 2 && y < GRID_SIZE/2 + 2) {
            setDotsShown(prev => prev + 1); // Skip this one, try again
            return;
        }

        setDotPosition({ x, y });
        setDotClicked(false);
        setDotsShown(prev => prev + 1);

        // Hide dot after some time
        const hideTimer = setTimeout(() => {
            setDotPosition(null);
        }, DOT_DISPLAY_TIME);
        
        return () => clearTimeout(hideTimer);
      }, Math.random() * 2000 + 1000); // Random interval between dots

      return () => clearTimeout(timer);
    } else if (dotsShown >= TOTAL_DOTS && testStarted) {
        let resultMessage = `You saw ${dotsSeen} out of ${TOTAL_DOTS - 1} dots.`;
        if (dotsSeen < TOTAL_DOTS - 4) { // Example threshold
            resultMessage += " We recommend a professional check-up."
        }
        onComplete(resultMessage);
    }
  }, [testStarted, dotsShown]);

  const handleSeeDot = () => {
    if (dotPosition && !dotClicked) {
      setDotsSeen(prev => prev + 1);
      setDotClicked(true); // Prevent multiple clicks for the same dot
    }
  };

  const getDotStyle = () => {
    if (!dotPosition) return { display: 'none' };
    const svgWidth = 282; // from viewBox
    const cellWidth = svgWidth / GRID_SIZE;
    return {
        position: 'absolute',
        left: `${dotPosition.x * cellWidth + 14.6}px`, // Add offset from group transform
        top: `${dotPosition.y * cellWidth + 14.6}px`,
        width: '8px',
        height: '8px',
        backgroundColor: 'red',
        borderRadius: '50%',
        transition: 'opacity 0.2s',
        opacity: 1,
    } as React.CSSProperties
  }

  return (
    <TestWrapper
      title="Visual Field Test"
      description={<>Cover your <b>{eye === 'left' ? 'right' : 'left'}</b> eye. Focus on the central circle. Click the "I see the dot" button as soon as you see a red dot appear.</>}
    >
      <div className="flex flex-col gap-8 w-full items-center justify-center">
        {!testStarted ? (
            <Button onClick={startTest} size="lg" className="transform hover:scale-110 transition-transform duration-200">Start Test</Button>
        ) : (
            <>
                <div className="relative w-full max-w-[400px]">
                    <VisualFieldGrid />
                    {dotPosition && <div style={getDotStyle()}></div>}
                </div>
                <Button onClick={handleSeeDot} size="lg" disabled={dotClicked || !dotPosition}>I see the dot</Button>
                <p className="text-muted-foreground">Dot {dotsShown} of {TOTAL_DOTS}</p>
            </>
        )}
      </div>
    </TestWrapper>
  );
}
