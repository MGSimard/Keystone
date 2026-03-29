import { Link } from "@tanstack/react-router";
import { Separator } from "@/components/shadcnui/separator";

export function Footer() {
  return (
    <footer className="min-h-12 shrink-0 border-t px-6 py-4 text-xs text-muted-foreground md:px-8">
      <ul className="flex flex-wrap items-center justify-center gap-4 text-center capitalize [&_a]:hover:text-primary [&_a]:hover:underline [&_a]:focus-visible:underline">
        <li>
          <Link to="/dashboard">Support</Link>
        </li>
        <li aria-hidden>
          <Separator orientation="vertical" className="h-4 data-vertical:self-center" />
        </li>
        <li>
          <Link to="/dashboard">System Status</Link>
        </li>
        <li aria-hidden>
          <Separator orientation="vertical" className="h-4 data-vertical:self-center" />
        </li>
        <li>
          <Link to="/dashboard">Careers</Link>
        </li>
        <li aria-hidden>
          <Separator orientation="vertical" className="h-4 data-vertical:self-center" />
        </li>
        <li>
          <Link to="/dashboard">Terms of Use</Link>
        </li>
        <li aria-hidden>
          <Separator orientation="vertical" className="h-4 data-vertical:self-center" />
        </li>
        <li>
          <Link to="/dashboard">Report Security Issues</Link>
        </li>
        <li aria-hidden>
          <Separator orientation="vertical" className="h-4 data-vertical:self-center" />
        </li>
        <li>
          <Link to="/dashboard">Privacy Policy</Link>
        </li>
        <li aria-hidden>
          <Separator orientation="vertical" className="h-4 data-vertical:self-center" />
        </li>
        <li>
          <Link to="/dashboard">Cookie Preferences</Link>
        </li>

        <li aria-hidden>
          <Separator orientation="vertical" className="h-4 data-vertical:self-center" />
        </li>
        <li>© 2026 MGSimard</li>
      </ul>
    </footer>
  );
}
