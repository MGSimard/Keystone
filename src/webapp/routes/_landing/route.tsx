import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_landing")({
  component: LayoutLanding,
});

function LayoutLanding() {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between gap-4">
          <div>Landing Layout</div>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/">Link 1</Link>
            </li>
            <li>
              <Link to="/">Link 2</Link>
            </li>
            <li>
              <Link to="/">Link 3</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
