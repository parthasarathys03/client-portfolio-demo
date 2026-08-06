"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
}

const defaultNavItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const initials = siteConfig.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2);

export function Header({ items = defaultNavItems }: { items?: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(() => items[0]?.href.slice(1) ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <Container
        as="nav"
        size="2xl"
        aria-label="Primary"
        className="flex h-16 items-center justify-between md:h-20"
      >
        <a href="#about" className="flex items-center gap-1 outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-sm">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[11px] font-medium text-primary-foreground">
            {initials}
          </span>
          <span className="flex items-center gap-1 text-sm font-normal text-muted-foreground/70">
            <ArrowUpRight className="h-3 w-3 text-muted-foreground/50" aria-hidden />
            {siteConfig.name}
          </span>
        </a>

        <ul className="hidden items-center gap-6 md:-mt-[2px] md:flex">
          {items.map((item, index) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  onClick={(event) => {
                    if (isActive) event.preventDefault();
                  }}
                  className="group flex items-center gap-1.5 rounded-sm text-sm font-medium outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <span
                    className={cn(
                      "font-mono text-[11px] font-light transition-colors duration-300",
                      isActive
                        ? "text-[var(--nav-accent)]"
                        : "text-muted-foreground group-hover:text-[var(--nav-accent)]",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[var(--nav-label)]">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground outline-none md:hidden focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </Container>

      <MotionConfig reducedMotion="user">
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-b border-border md:hidden"
            >
              <Container as="ul" size="2xl" className="flex flex-col gap-1 py-4">
                {items.map((item, index) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-md px-3 py-3 text-base text-foreground outline-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </header>
  );
}
