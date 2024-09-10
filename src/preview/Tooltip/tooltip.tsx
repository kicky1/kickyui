"use client";

import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
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
