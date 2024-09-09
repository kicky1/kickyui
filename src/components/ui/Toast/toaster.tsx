"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/toast";
import { useToast } from "@/components/hooks/use-toast";
import { TOAST_REMOVE_DELAY } from "@/components/hooks/use-toast";
import { ProgressBar } from "../Progress/progress";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="absolute z-50 max-w-full">
      <ToastProvider>
        {toasts.map(
          ({
            id,
            title,
            description,
            action,
            duration,
            position,
            ...props
          }) => (
            <Toast key={id} duration={duration} {...props}>
              <div className="flex w-full flex-col">
                <div className="mr-4 flex w-full items-center justify-start gap-2 p-2">
                  <div className="grid gap-1">
                    {title && <ToastTitle>{title}</ToastTitle>}
                    {description && (
                      <ToastDescription>{description}</ToastDescription>
                    )}
                  </div>
                  {action}
                </div>
                <ToastClose />
                <ProgressBar
                  toastRemoveDelay={duration || TOAST_REMOVE_DELAY}
                />
              </div>
            </Toast>
          ),
        )}
        <ToastViewport position="bottom-right" />
      </ToastProvider>
    </div>
  );
}
