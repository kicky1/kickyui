export const toastCode = `
"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/Button/button";

type Props = {
  variant: 
  size:  
  loading: boolean
  disabled: boolean
  tooltipText: string
  Icon: JSX.Element
  iconPlacement: "left" | "right"
}

export default function ButtonExample() {
  return (
    <>
      <Button
        variant={variant}
        size={size}
        loading={loading}
        disabled={loading}
        tooltipText={tooltipText}
        Icon={<Icons.arrowRight className="h-5 w-5" />}
        iconPlacement="right"
      >
        {size === "icon" ? null : "Button"}
      </Button>
    </>
  );
}


`;
