import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
  id: string;
}

// Nested section content so we can have full-width section BG colors while still having max-width for content

export function Section({ children, id, className, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-16 px-6 py-16 md:px-8", className)} {...props}>
      <div className="mx-auto max-w-360">{children}</div>
    </section>
  );
}
