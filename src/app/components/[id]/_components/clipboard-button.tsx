"use client";

import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";

export default function ClipboardButton({
  code,
  isDependency = false, // Default value if not provided
}: {
  code: string;
  isDependency?: boolean;
}) {
  return (
    <div
      className={`absolute ${isDependency ? "-top-2 right-0" : "right-8 top-2"}`}
    >
      <Button
        variant="link"
        className={`text-white`}
        onClick={() => {
          navigator.clipboard.writeText(code);
          toast({
            description: "Copied code to clipboard",
            title: "Copied",
            duration: 4000,
            variant: "default",
            position: "bottom-right",
          });
        }}
      >
        <Clipboard width={18} height={18} />
      </Button>
    </div>
  );
}
