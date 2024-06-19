"use client";

import { Button } from "@/components/ui/Button/button";
import { useEngineSettingsStore } from "@/zustand/stores/useEngineSettings";

export default function ButtonExample() {
  const loading = useEngineSettingsStore((state) => state.loading);
  const variant = useEngineSettingsStore((state) => state.variant);
  const size = useEngineSettingsStore((state) => state.size);
  const tooltipText = useEngineSettingsStore((state) => state.tooltipText);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => console.log("clicked")}
        loading={loading}
        disabled={loading}
        tooltipText={tooltipText}
      >
        {size === "icon" ? null : "Button"}
      </Button>
    </>
  );
}
