import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

const maxWidths = {
  sm: "max-w-[640px]",
  md: "max-w-[768px]",
  lg: "max-w-[1024px]",
  xl: "max-w-[1280px]",
  "2xl": "max-w-[1440px]",
} as const;

export type ContainerSize = keyof typeof maxWidths;

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  as?: ElementType;
  size?: ContainerSize;
  children: ReactNode;
}

export function Container({
  as: Component = "div",
  size = "xl",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full px-6 md:px-12 lg:px-16", maxWidths[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
