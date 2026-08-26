import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"; // Simple asChild handling for Next Link wrapping
    return (
      <Comp
        ref={ref as any}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl font-sans font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-brand-coral text-white hover:bg-[#FF4049]": variant === "primary",
            "bg-brand-midnight text-white hover:bg-opacity-90": variant === "secondary",
            "border border-brand-midnight bg-transparent hover:bg-brand-midnight hover:text-white": variant === "outline",
            "bg-transparent hover:bg-white/10 text-brand-white": variant === "ghost",
            "bg-brand-white text-brand-midnight hover:bg-white": variant === "white",
            "h-10 px-4 text-sm": size === "sm",
            "h-12 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
