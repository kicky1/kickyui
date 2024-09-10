"use client";

import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useToastEngineSettingsStore } from "@/zustand/stores/useToastEngineSettings";

export default function ToastExample() {
  const title = useToastEngineSettingsStore((state) => state.toastTitle);
  const description = useToastEngineSettingsStore(
    (state) => state.toastDescription,
  );
  const variant = useToastEngineSettingsStore((state) => state.toastVariant);
  const position = useToastEngineSettingsStore((state) => state.toastPosition);
  const duration = useToastEngineSettingsStore((state) => state.toastDuration);

  console.log(position);

  return (
    <>
      <Button
        onClick={() =>
          toast({
            title: title,
            description: description,
            variant: variant,
            duration: duration,
            position: position,
          })
        }
      >
        Toast
      </Button>
    </>
  );
}
