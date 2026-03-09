import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { ThemeSelect } from "@/components/ThemeSelect";
import { Button } from "@/components/shadcnui/button";

export const Route = createFileRoute("/_landing")({
  component: LayoutLanding,
});

function LayoutLanding() {
  return (
    <>
      <header className="font-mono">
        <nav className="flex items-center justify-between gap-4">
          <Link to="/">[ LOGO ]</Link>
          <ul className="flex items-center gap-4 uppercase">
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
