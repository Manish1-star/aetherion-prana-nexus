import * as React from "react";
import { cn } from "~/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | "himalayan";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-lapis hover:bg-lapis/90 text-white shadow-lg shadow-lapis/20",
      ghost: "hover:bg-white/10 text-white",
      outline: "border border-white/20 bg-transparent hover:bg-white/5",
      himalayan: "bg-gradient-to-r from-saffron to-gold text-black font-bold shadow-[0_0_15px_rgba(255,119,34,0.5)] hover:shadow-[0_0_25px_rgba(255,119,34,0.8)]",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button };
