
"use client";

import { Button } from "@/components/ui/button";

type Props = {
  onNext: () => void;
};

export function BrightnessInstructions({ onNext }: Props) {
  return (
    <div className="text-center space-y-8 flex flex-col items-center p-4 min-h-[500px] justify-center animate-fade-in">
      <svg width="74" height="175" viewBox="0 0 74 175" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="72.7098" height="174" rx="20.5" fill="#32373E" stroke="#C2CDD6"></rect>
        <path d="M1 80.7772H72.7098V154C72.7098 165.046 63.7555 174 52.7098 174H21C9.95429 174 1 165.046 1 154V80.7772Z" fill="white"></path>
        <mask id="mask0_1769_17326" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="26" y="137" width="22" height="22">
          <rect x="26.0986" y="137.249" width="21.513" height="21.513" fill="#17191C"></rect>
        </mask>
        <g mask="url(#mask0_1769_17326)">
          <path d="M36.183 141.91V138.616H37.5276V141.91H36.183ZM41.6285 144.173L40.7097 143.254L43.0179 140.879L43.9591 141.843L41.6285 144.173ZM42.9507 148.677V147.333H46.2448V148.677H42.9507ZM36.183 157.395V154.1H37.5276V157.395H36.183ZM32.1046 144.151L29.7292 141.843L30.6928 140.901L33.0457 143.232L32.1046 144.151ZM42.9955 155.131L40.7097 152.756L41.6061 151.86L43.9591 154.145L42.9955 155.131ZM27.4658 148.677V147.333H30.76V148.677H27.4658ZM30.6928 155.131L29.7516 154.168L32.0597 151.86L32.5527 152.308L33.0457 152.778L30.6928 155.131ZM36.8553 152.935C35.4809 152.935 34.3156 152.457 33.3595 151.501C32.4033 150.545 31.9253 149.38 31.9253 148.005C31.9253 146.631 32.4033 145.465 33.3595 144.509C34.3156 143.553 35.4809 143.075 36.8553 143.075C38.2298 143.075 39.3951 143.553 40.3512 144.509C41.3073 145.465 41.7854 146.631 41.7854 148.005C41.7854 149.38 41.3073 150.545 40.3512 151.501C39.3951 152.457 38.2298 152.935 36.8553 152.935ZM36.8553 151.591C37.8413 151.591 38.6854 151.24 39.3876 150.537C40.0897 149.835 40.4408 148.991 40.4408 148.005C40.4408 147.019 40.0897 146.175 39.3876 145.473C38.6854 144.771 37.8413 144.42 36.8553 144.42C35.8693 144.42 35.0252 144.771 34.3231 145.473C33.6209 146.175 33.2698 147.019 33.2698 148.005C33.2698 148.991 33.6209 149.835 34.3231 150.537C35.0252 151.24 35.8693 151.591 36.8553 151.591Z" fill="#32373E"></path>
        </g>
        <path d="M37.5616 38.8369C37.1711 38.4464 36.5379 38.4464 36.1474 38.8369L29.7834 45.2009C29.3929 45.5914 29.3929 46.2246 29.7834 46.6151C30.1739 47.0056 30.8071 47.0056 31.1976 46.6151L36.8545 40.9582L42.5113 46.6151C42.9019 47.0056 43.535 47.0056 43.9256 46.6151C44.3161 46.2246 44.3161 45.5914 43.9256 45.2009L37.5616 38.8369ZM37.8545 69.5725L37.8545 39.544L35.8545 39.544L35.8545 69.5725L37.8545 69.5725Z" fill="#0072EF"></path>
      </svg>
       <h2 className="font-headline text-4xl font-bold text-primary">
        Brightness up.
      </h2>
      <p className="text-lg text-foreground max-w-sm">
        In your device settings, turn your screen brightness all the way up for
        the most accurate results.
      </p>
      <Button
        onClick={onNext}
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-110 transition-transform duration-200"
      >
        Next step
      </Button>
    </div>
  );
}

    