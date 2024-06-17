"use client";

import { Button } from "@/components/Button/Button";

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
