"use client";

import { Button } from "@/components/ui/Button/button";
import { useAuthorizationStore } from "@/zustand/stores/useEngineSettings";

export default function ButtonExample() {
  const loading = useAuthorizationStore((state) => state.loading);
  const variant = useAuthorizationStore((state) => state.variant);
  const size = useAuthorizationStore((state) => state.size);
  const tooltipText = useAuthorizationStore((state) => state.tooltipText);

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
