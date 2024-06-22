"use client";

import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/Button/button";
import { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface ButtonAnimatedProps extends ButtonProps {
  spread?: string;
  shimmerColor?: string;
  speed?: string;
  cut?: string;
}

const buttonVariants = cva("absolute -z-20 rounded-md [inset:var(--cut)]", {
  variants: {
    variant: {
      default: "bg-primary hover:bg-primary/90",
      destructive: "bg-destructive hover:bg-destructive/90",
      outline: "bg-white hover:bg-slate-500",
      secondary: "bg-secondary hover:bg-secondary/80",
      ghost: "hover:bg-primary",
      link: "",
      hoverFromLeft: "bg-primary hover:bg-primary/90",
      hoverFromRight: "bg-primary hover:bg-primary/90",
      hoverFromBottom: "bg-primary hover:bg-primary/90",
      hoverFromTop: "bg-primary hover:bg-primary/90",
      linkHoverVisible: "",
      linkHoverInvisible: "",
      expandIcon: "bg-primary hover:bg-primary/90",
      shine: "bg-primary hover:bg-primary/90",
      ringHover: "bg-primary hover:bg-primary/90",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const ButtonAnimated = React.forwardRef<HTMLButtonElement, ButtonAnimatedProps>(
  (
    {
      spread = "90deg",
      shimmerColor = "#ffffff",
      speed = "3s",
      cut = "0.07em",
      className,
      children = "Button",
      variant,
      size,
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        style={
          {
            "--spread": spread,
            "--shimmer-color": shimmerColor,
            "--speed": speed,
            "--cut": cut,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 overflow-hidden whitespace-nowrap border border-white/10",
          className,
        )}
        variant={variant}
        size={size}
        {...props}
      >
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]",
          )}
        >
          <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
          </div>
        </div>
        {children}
        <div className={cn(buttonVariants({ variant, className }))} />
      </Button>
    );
  },
);

ButtonAnimated.displayName = "ButtonAnimated";

export default ButtonAnimated;
