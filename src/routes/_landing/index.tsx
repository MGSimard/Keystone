import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_landing/")({
  component: PageHome,
});

function PageHome() {
  return (
    <>
      <section>
        <div>Social Proof</div>
        <h1>Hero Section</h1>
        <p>Key Problem, Key Solution</p>
        <div>
          <button type="button">Primary CTA</button>
          <button type="button">Secondary CTA</button>
        </div>
      </section>
      <section>
        <h2>Partners Section</h2>
      </section>
      <section>
        <h2>Benefits Section</h2>
      </section>
      <section>
        <h2>How It Works Section</h2>
      </section>
      <section>
        <h2>Pricing Section</h2>
      </section>
      <section>
        <h2>Testimonials Section</h2>
      </section>
      <section>
        <h2>FAQ Section</h2>
      </section>
      <section>
        <h2>CTA Section</h2>
      </section>
    </>
  );
}
