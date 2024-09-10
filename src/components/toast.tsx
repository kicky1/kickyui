/** @format */

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Icons } from "./icons";

const ToastProvider = ToastPrimitives.Provider;
type ToastViewportProps = React.ComponentPropsWithoutRef<
  typeof ToastPrimitives.Viewport
> & {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  ToastViewportProps
>(({ className, position, ...props }, ref) => {
  const positionClasses = `
    ${position?.includes("top") ? "top-0" : ""} 
    ${position?.includes("bottom") ? "bottom-0" : ""} 
    ${position?.includes("left") ? "left-0" : ""} 
    ${position?.includes("right") ? "right-0" : ""}
  `;

  return (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(
        `fixed z-[100] mx-4 mt-4 flex max-h-screen w-full p-2 sm:flex-col md:max-w-[420px] ${positionClasses}`,
        className,
      )}
      {...props}
    />
  );
});

ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-white dark:bg-zinc-800",
        danger:
          "danger group border-danger bg-white text-danger dark:bg-zinc-800",
        success:
          "success group border-success bg-white text-success dark:bg-zinc-800",
        warning:
          "warning group border-warning bg-white text-warning dark:bg-zinc-800",
        info: "info group border-info bg-white text-info dark:bg-zinc-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className, "mx-2 my-1 p-0")}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "group-[.danger]:hover:text-danger-foreground mr-6 inline-flex h-8 shrink-0 items-center justify-center rounded border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.danger]:border-muted/40 hover:bg-secondary group-[.danger]:hover:border-danger/30 group-[.danger]:hover:bg-danger focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.danger]:focus:ring-danger disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.danger]:text-red-300 hover:bg-muted hover:text-foreground group-[.danger]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.danger]:focus:ring-red-400 group-[.danger]:focus:ring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <Icons.close className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
