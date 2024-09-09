"use client";

import { useEffect, useState } from "react";

export function ProgressBar({
  toastRemoveDelay = 0,
}: {
  toastRemoveDelay: number;
}) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevProgress - 100 / (toastRemoveDelay / 10);
      });
    }, 10);

    return () => {
      clearInterval(timer);
      setProgress(100);
    };
  }, [toastRemoveDelay]);

  return (
    <>
      <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-1.5 rounded-full bg-black"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
}
