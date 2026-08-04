import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container, type ContainerSize } from "@/components/layout/Container";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  id: string;
  variant?: "base" | "surface";
  containerSize?: ContainerSize;
  children: ReactNode;
}

export function Section({
  id,
  variant = "base",
  containerSize = "xl",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 lg:py-32", variant === "surface" && "bg-surface", className)}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
