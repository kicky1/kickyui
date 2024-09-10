export const buttonCosmicCode = `"use client";

import { Button } from "@/components/ui/button";

export default function ButtonCosmic() {
  return (
    <>
      <Button
        variant={'futuristic'}
      >
        <div className="z-100 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-black before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-black after:content-['']">
          <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-black before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-black after:content-['']"></div>
        </div>
        Button
      </Button>
    </>
  );
}

`;
