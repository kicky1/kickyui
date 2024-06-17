import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-secondary hover:bg-primary/90",
        destructive:
          "bg-destructive text-textDestructive hover:bg-destructive/90",
        outline:
          "border-2 border-slate-600 bg-white hover:bg-slate-500 hover:text-textHoverPrimary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-primary hover:text-textHoverPrimary",
        link: "text-textPrimary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading = false, loadingText="Processing...", ...props }, ref) => {
    return !loading ? (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    ) : (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div className={size !== "icon" ? `pr-3` : ''}>
          <Icons.spinner className="h-6 w-6 animate-spin" />
        </div>{" "}
        {size !== "icon" && loadingText}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
