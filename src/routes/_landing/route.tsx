import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { ThemeSelect } from "@/components/ThemeSelect";
import { Button } from "@/components/shadcnui/button";

export const Route = createFileRoute("/_landing")({
  component: LayoutLanding,
});

function LayoutLanding() {
  // data-layout is for css :has() html/body background color override
  // Cleaner than a wrapper div that would still expose site's bg color token
  // on overscroll (esp safari), paint delays etc

  return (
    <>
      <header className="font-mono" data-layout="landing">
        <nav className="flex items-center justify-between gap-4">
          <Link to="/">[ LOGO ]</Link>
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
              <Button type="button" nativeButton={false} render={<Link to="/dashboard" />}>
                ACCESS
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}
