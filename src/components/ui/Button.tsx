import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { buttonMotion } from "@/constants/motion";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:bg-accent/90 shadow-[0_0_0_1px_rgba(37,99,235,0.5)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.35)]",
        secondary:
          "bg-surface text-text-primary border border-white/10 hover:border-white/20 hover:bg-surface-secondary hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]",
        ghost:
          "text-text-secondary hover:text-text-primary hover:bg-white/5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-button",
        md: "h-11 px-6 text-sm rounded-button",
        lg: "h-12 px-8 text-base rounded-button",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = HTMLMotionProps<"button"> & ButtonVariants;
export type ButtonLinkProps = HTMLMotionProps<"a"> & ButtonVariants;

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={cn(buttonVariants({ variant, size }), className)}
      whileHover={buttonMotion.hover}
      whileTap={buttonMotion.tap}
      transition={buttonMotion.transition}
      data-cursor-hover
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <motion.a
      className={cn(buttonVariants({ variant, size }), className)}
      whileHover={buttonMotion.hover}
      whileTap={buttonMotion.tap}
      transition={buttonMotion.transition}
      data-cursor-hover
      {...props}
    />
  );
}
