"use client";

import { Button } from "@/components/ui/Button/button";
import { useAuthorizationStore } from "@/zustand/stores/useEngineSettings";

export default function ButtonExample() {
  const loading = useAuthorizationStore((state) => state.loading);
  const variant = useAuthorizationStore((state) => state.variant);

  return (
    <>
      <Button
        variant={variant}
        size={"default"}
        onClick={() => console.log("clicked")}
        loading={loading}
        disabled={loading}
      >
        {variant === "icon" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        ) : (
          "Button"
        )}
      </Button>
    </>
  );
}
