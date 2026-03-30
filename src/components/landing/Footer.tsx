import { Link } from "@tanstack/react-router";
import { Separator } from "@/components/shadcnui/separator";
import { WordMark } from "@/components/BrandIcons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 py-16 md:px-8">
      <div className="mx-auto grid max-w-400 grid-cols-4">
        <div className="col-span-4 md:col-span-1">
          <WordMark />
          <ul className="flex items-center gap-12">
            <li>X</li>
            <li>I</li>
            <li>L</li>
          </ul>
        </div>
        <div>
          Products
          <ul className="capitalize">
            <li>
              <Link to="/">Product 1</Link>
            </li>
            <li>
              <Link to="/">Product 2</Link>
            </li>
            <li>
              <Link to="/">Product 3</Link>
            </li>
          </ul>
        </div>
        <div>
          Support
          <ul className="capitalize">
            <li>
              <Link to="/">Support 1</Link>
            </li>
            <li>
              <Link to="/">Support 2</Link>
            </li>
            <li>
              <Link to="/">Support 3</Link>
            </li>
          </ul>
        </div>
        <div>
          Help Center
          <ul className="capitalize">
            <li>
              <Link to="/">Help Center 1</Link>
            </li>
            <li>
              <Link to="/">Help Center 2</Link>
            </li>
            <li>
              <Link to="/">Help Center 3</Link>
            </li>
          </ul>
        </div>
        <ul className="col-span-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground capitalize [&_a]:hover:text-primary [&_a]:hover:underline [&_a]:focus-visible:underline">
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li aria-hidden>
            <Separator orientation="vertical" className="h-4 data-vertical:self-center" />
          </li>
          <li>
            <Link to="/">User Agreement</Link>
          </li>
          <li aria-hidden>
            <Separator orientation="vertical" className="h-4 data-vertical:self-center" />
          </li>
          <li>
            <Link to="/">Cookie Policy</Link>
          </li>
          <li aria-hidden>
            <Separator orientation="vertical" className="h-4 data-vertical:self-center" />
          </li>
          <li>
            <button type="button">Cookie Settings</button>
          </li>
        </ul>
        <div className="col-span-4 font-mono text-xs text-muted-foreground uppercase">
          <span>© Keystone. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
