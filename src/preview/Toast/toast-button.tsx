"use client";

import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/Button/button";

export default function ToastExample() {
  return (
    <>
      <Button
        onClick={() =>
          toast({
            title: "Success!",
            description: `This is a success toast of ${4000}ms`,
            variant: "success",
            duration: 4000,
            position: "top-left",
          })
        }
      >
        Toast
      </Button>
    </>
  );
}
