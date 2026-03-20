import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

import type React from "react";

interface SectionProps extends React.ComponentProps<"section"> {
  id: string;
  variant?: "default" | "primary";
  label: string;
  heading: string;
  children: React.ReactNode;
}

export function Section({ id, className, variant = "default", label, heading, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn(sectionVariants({ variant }), className)} {...props}>
      <div className="mx-auto w-full max-w-360">
        <span className={sectionLabelVariants({ variant })}>{label}</span>
        <h2 className={sectionHeadingVariants({ variant })}>{heading}</h2>
        {children}
      </div>
    </section>
  );
}

const sectionVariants = cva("scroll-mt-16 px-6 py-16 md:px-8", {
  variants: {
    variant: {
      default: "",
      primary: "bg-landing-primary text-landing-background",
    },
  },
  defaultVariants: { variant: "default" },
});

const sectionLabelVariants = cva("mb-2 inline-block px-2 py-1.5 font-mono leading-none uppercase tabular-nums", {
  variants: {
    variant: {
      default: "bg-landing-primary text-landing-background",
      primary: "bg-landing-background text-landing-primary",
    },
  },
  defaultVariants: { variant: "default" },
});

const sectionHeadingVariants = cva(
  "mb-8 indent-[-0.05em] font-mono text-[clamp(2rem,6vw,4rem)]/tight font-bold tracking-tighter",
  {
    variants: {
      variant: {
        default: "text-landing-primary",
        primary: "text-landing-background",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
