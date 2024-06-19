"use client";

import {
  setIsArrow,
  useEngineSettingsStore,
} from "@/zustand/stores/useEngineSettings";
import { Checkbox } from "@/components/ui/Checkbox/checkbox";

export default function TooltipSettingsEngine() {
  const isArrow = useEngineSettingsStore((state) => state.isArrow);

  const handleSetIsArrow = (isArrow: boolean) => {
    setIsArrow(isArrow);
  };

  return (
    <>
      <div className="mx-auto">
        <div className="items-top flex space-x-2">
          <Checkbox
            checked={isArrow}
            onCheckedChange={() => handleSetIsArrow(!isArrow)}
          />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Show arrow
          </label>
        </div>
      </div>
    </>
  );
}
