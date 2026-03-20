import { cn } from "@/lib/utils";
import { IconPlus } from "@tabler/icons-react";
/** CUSTOM ACCORDION
 * - Base UI's Accordion primitives leverage JavaScript for features we don't need
 * - It also animates using JavaScript height definitions which is trash
 * - shadcn/ui's uses the Base UI primitives + have to fight the preset styles
 *
 * Instead we'll just use built-in HTML Summary/Details elements with grid + opacity anims & accessibility
 */

interface AccordionProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  items: Array<{
    title: string;
    content: string;
  }>;
}

export default function Accordion({ items, className, ...props }: AccordionProps) {
  return (
    <ul className={cn("divide-y", className)} {...props}>
      {items.map((item) => (
        <li key={item.title}>
          <details className="group details-content:grid details-content:grid-rows-[minmax(0,0fr)] details-content:opacity-0 open:details-content:grid-rows-[minmax(0,1fr)] open:details-content:opacity-100 motion-safe:details-content:transition-all motion-safe:details-content:duration-150 motion-safe:details-content:ease-out-quart">
            <summary className="flex cursor-pointer list-none justify-between gap-8 py-6 text-lg font-bold md:py-8 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              {item.title}
              <IconPlus className="shrink-0 text-landing-primary group-open:rotate-45 motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-out-quart" />
            </summary>
            <div className="overflow-hidden">
              <p className="pb-6 text-muted-foreground md:pb-8">{item.content}</p>
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}
