import { useCallback, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcnui/dropdown-menu";
import { Button } from "@/components/shadcnui/button";
import { WordMark } from "@/components/BrandIcons";
import { IconMenu2 } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll sentinel for header background opacity
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
            <DropdownMenu>
              <DropdownMenuTrigger
                openOnHover
                render={
                  <Button variant="outline" size="icon" className="rounded-none" aria-label="Navigation Menu">
                    <IconMenu2 />
                  </Button>
                }
              />
              <DropdownMenuContent className="rounded-none **:rounded-none" align="end">
                <DropdownMenuGroup className="space-y-2">
                  <DropdownMenuLabel>NAVIGATION</DropdownMenuLabel>
                  <DropdownMenuItem render={<Link to="/" />}>HOME</DropdownMenuItem>
                  <DropdownMenuItem render={<Link to="/" />}>FEATURES</DropdownMenuItem>
                  <DropdownMenuItem render={<Link to="/" />}>PRICING</DropdownMenuItem>
                  <DropdownMenuItem render={<Link to="/" />}>CONTACT</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>
    </>
  );
}
