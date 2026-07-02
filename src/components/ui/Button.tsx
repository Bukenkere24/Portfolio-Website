import { cva, type VariantProps } from "class-variance-authority";
import { Loader2, type LucideIcon } from "lucide-react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { buttonMotion } from "@/constants/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:bg-accent/90 shadow-[0_0_0_1px_rgba(37,99,235,0.5)] hover:shadow-[var(--shadow-button-primary)]",
        secondary:
          "bg-surface text-text-primary border border-white/10 hover:border-white/20 hover:bg-surface-secondary hover:shadow-[var(--shadow-button-secondary)]",
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

type SharedButtonProps = ButtonVariants & {
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
};

export type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> &
  SharedButtonProps & {
    children?: React.ReactNode;
  };

export type ButtonLinkProps = Omit<HTMLMotionProps<"a">, "children"> &
  SharedButtonProps & {
    children?: React.ReactNode;
  };

function ButtonContent({
  children,
  loading,
  icon: Icon,
  iconPosition = "left",
}: {
  children?: React.ReactNode;
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}) {
  const iconElement = loading ? (
    <Loader2 className="size-4 animate-spin" aria-hidden />
  ) : Icon ? (
    <Icon className="size-4" aria-hidden />
  ) : null;

  return (
    <>
      {iconPosition === "left" && iconElement}
      {children}
      {iconPosition === "right" && iconElement}
    </>
  );
}

export function Button({
  className,
  variant,
  size,
  loading = false,
  disabled,
  icon,
  iconPosition,
  children,
  ...props
}: ButtonProps) {
  const reduceMotion = useReducedMotion();
  const isDisabled = disabled || loading;

  return (
    <motion.button
      className={cn(buttonVariants({ variant, size }), className)}
      whileHover={isDisabled || reduceMotion ? undefined : buttonMotion.hover}
      whileTap={isDisabled || reduceMotion ? undefined : buttonMotion.tap}
      transition={buttonMotion.transition}
      disabled={isDisabled}
      aria-busy={loading}
      data-cursor-hover={!isDisabled ? true : undefined}
      {...props}
    >
      <ButtonContent
        loading={loading}
        icon={icon}
        iconPosition={iconPosition}
      >
        {children}
      </ButtonContent>
    </motion.button>
  );
}

export function ButtonLink({
  className,
  variant,
  size,
  loading = false,
  icon,
  iconPosition,
  children,
  ...props
}: ButtonLinkProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      className={cn(
        buttonVariants({ variant, size }),
        loading && "pointer-events-none opacity-70",
        className,
      )}
      whileHover={loading || reduceMotion ? undefined : buttonMotion.hover}
      whileTap={loading || reduceMotion ? undefined : buttonMotion.tap}
      transition={buttonMotion.transition}
      aria-busy={loading}
      data-cursor-hover
      {...props}
    >
      <ButtonContent
        loading={loading}
        icon={icon}
        iconPosition={iconPosition}
      >
        {children}
      </ButtonContent>
    </motion.a>
  );
}

export { buttonVariants };
