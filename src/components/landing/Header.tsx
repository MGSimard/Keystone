import { useCallback, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ThemeSelect } from "@/components/ThemeSelect";
import { Button } from "@/components/shadcnui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Use sentinel that fires on intersection to darken header background on scroll
  const refCallback = useCallback((el: HTMLDivElement | null) => {
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => entry && setIsScrolled(!entry.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div ref={refCallback} className="pointer-events-none h-px select-none" aria-hidden />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-10 px-4 transition-colors duration-150",
          isScrolled && "bg-landing-background"
        )}>
        <nav className="flex h-16 items-center justify-between gap-4">
          <Link to="/">LOGO</Link>
          <ul className="flex items-center gap-4 uppercase [&_a]:hover:underline [&_a]:focus-visible:underline">
            <li>
              <Link to="/">FEATURES</Link>
            </li>
            <li>
              <Link to="/">PRICING</Link>
            </li>
            <li>
              <Link to="/">CONTACT</Link>
            </li>
            <li>
              <ThemeSelect />
            </li>
            <li>
              <Button type="button" variant="outline" nativeButton={false} render={<Link to="/dashboard" />}>
                ACCESS
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
