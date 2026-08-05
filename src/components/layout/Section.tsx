import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container, type ContainerSize } from "@/components/layout/Container";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  id: string;
  variant?: "base" | "surface";
  containerSize?: ContainerSize;
  containerClassName?: string;
  children: ReactNode;
}

export function Section({
  id,
  variant = "base",
  containerSize = "xl",
  containerClassName,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-18 lg:py-24", variant === "surface" && "bg-surface", className)}
      {...props}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
