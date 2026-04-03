import { useCallback, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MobileNavDropdown } from "@/components/landing/MobileNavDropdown";
import { ThemeSelect } from "@/components/ThemeSelect";
import { Button } from "@/components/shadcnui/button";
import { cn } from "@/lib/utils";
import { WordMark } from "@/components/BrandIcons";

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
      <div ref={refCallback} className="pointer-events-none absolute top-0 h-0 opacity-0 select-none" aria-hidden />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-10 border-b border-transparent px-6 font-mono uppercase shadow-sm shadow-transparent transition-all duration-150 md:px-8",
          isScrolled && "border-border bg-landing-background shadow-black/10"
        )}>
        <nav className="mx-auto flex h-16 max-w-400 items-center gap-12">
          <Link to="/" className="shrink-0">
            <WordMark />
          </Link>

          <div className="ml-auto flex shrink-0 items-center gap-4 *:shrink-0">
            <ThemeSelect />
            <Button
              variant="outline"
              nativeButton={false}
              className="rounded-none tracking-widest"
              render={<Link to="/" />}>
              DEMO
            </Button>
            <Button nativeButton={false} className="rounded-none tracking-widest" render={<Link to="/dashboard" />}>
              ACCESS
            </Button>
            <MobileNavDropdown />
          </div>
        </nav>
      </header>
    </>
  );
}
