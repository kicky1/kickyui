"use client";

import { Button } from "@/components/ui/Button/button";

type Props = {
  loading?: boolean;
}

export default function ButtonExample({ loading }: Props) {
  return (
    <>
      <Button
        variant={"default"}
        size={"default"}
        onClick={() => console.log("clicked")}
        loading={loading}
        disabled={loading}
      >
        Button
      </Button>
    </>
  );
}
