"use client";

import { Button } from "@/components/ui/Button/button";
import { useEngineSettingsStore } from "@/zustand/stores/useEngineSettings";
import ShimmerButton from "../ui/Button/shimmerbutton";

export default function ButtonAnimated() {


  return (
    <>
      <ShimmerButton>
        Button
      </ShimmerButton>
    </>
  );
}
