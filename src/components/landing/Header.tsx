import { useCallback, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MobileNavDropdown } from "@/components/landing/MobileNavDropdown";
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
      <div ref={refCallback} className="pointer-events-none absolute top-0 h-0 opacity-0 select-none" aria-hidden />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-10 px-6 font-mono uppercase shadow-sm shadow-transparent transition-all duration-150 md:px-8",
          isScrolled && "bg-background shadow-black"
        )}>
        <nav className="flex h-16 items-center gap-12">
          <ul className="flex items-center gap-8 font-light [&_a]:hover:underline [&_a]:focus-visible:underline">
            <li>
              <Link to="/">LOGO</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/">FEATURES</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/">PRICING</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/">CONTACT</Link>
            </li>
          </ul>
          <div className="ml-auto flex items-center gap-4">
            <ThemeSelect />
            <Button
              type="button"
              variant="outline"
              nativeButton={false}
              className="rounded-none tracking-widest"
              render={<Link to="/" />}>
              DEMO
            </Button>
            <Button
              type="button"
              nativeButton={false}
              className="rounded-none tracking-widest"
              render={<Link to="/dashboard" />}>
              ACCESS
            </Button>
            <MobileNavDropdown />
          </div>
        </nav>
      </header>
    </>
  );
}
