"use client";

import { Button } from "@/components/ui/Button/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/Tooltip/tooltip";
import { useEngineSettingsStore } from "@/zustand/stores/useEngineSettings";

export default function TooltipExample() {
  const isArrow = useEngineSettingsStore((state) => state.isArrow);
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Tooltip</Button>
          </TooltipTrigger>
          <TooltipContent isArrow={isArrow}>Tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
