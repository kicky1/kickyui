export const toastCode = `
"use client";

import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";

type Props = {
 title?: string;
 description?: string;
 variant?: string;
 position?: string;
 duration?: number;
}

export default function ToastExample({ title, description, variant, position, duration }: Props) {
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
`;
