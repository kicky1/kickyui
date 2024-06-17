"use client";

import { Button } from "@/components/ui/Button/button";

export default function ButtonExample() {
  return (
    <>
      <Button
        variant={"outline"}
        size={"lg"}
        onClick={() => console.log("clicked")}
      >
        Button
      </Button>
    </>
  );
}
