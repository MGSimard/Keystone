import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/_landing")({
  component: LayoutLanding,
});

function LayoutLanding() {
  // data-layout is for css :has() html/body background color override
  // Cleaner than a wrapper div that would still expose site's bg color token
  // on overscroll (esp safari), paint delays etc

  return (
    <>
      <Header />
      <main data-layout="landing">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
