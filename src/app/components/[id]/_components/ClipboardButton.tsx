"use client";

import { Button } from "@/components/ui/Button/button";
import { Clipboard } from "lucide-react";

export default function ClipboardButton({ code }: { code: string }) {
  return (
    <div className="absolute right-8 top-2">
      <Button
        variant="link"
        className="text-primary"
        onClick={() => {
          navigator.clipboard.writeText(code);
          alert("Copied!");
        }}
      >
        <Clipboard width={18} height={18} />
      </Button>
    </div>
  );
}
