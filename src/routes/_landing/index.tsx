import { createFileRoute } from "@tanstack/react-router";
import { FragmentedGradient } from "@/components/landing/FragmentedGradient";
import { PartnersTicker } from "@/components/landing/PartnersTicker";

export const Route = createFileRoute("/_landing/")({
  component: PageHome,
});

// STYLIZATION NOTES
// Cool idea: Solid hero background color (or bottom strip) and dither it out in square/circled glyphs into the website's background

// Cool combo
// 100: #E7E7E6
// 200: #CFCBBF
// 300: #B8B19C
// 400: #4E4A3E
// 500: #1F2022
// Y-100: #F5D200

/** LIGHT SETS
 * OFFWHITE BACKGROUND, WASHED OUT DARK GREEN FOREGROUND
 * Background: #f0f1ef - oklch(0.9568 0.0029 128.49)
 * Foreground: #2c3126 - oklch(0.3046 0.0204 127.49)
 *
 * ORANGE BACKGROUND, DARK BROWN FOREGROUND (Optically black)
 * Background: #ff5c01 - oklch(0.6837 0.212 40.54)
 * Foreground: #221715 - oklch(0.2179 0.0184 30.34)
 *
 * ORANGE BACKGROUND, WHITE FOREGROUND
 * Background: #ff781e - oklch(0.7209 0.1875 47.68)
 * Foreground: #ffffff - oklch(1 0 0)
 *
 * OFFWHITE BACKGROUND, DARK GRAY FOREGROUND (Optically black)
 * Background: #f1f1ef - oklch(0.9576 0.0027 106.45)
 * Foreground: #242424 - oklch(0.2603 0 0)
 * Decor: #ff781e - oklch(0.7209 0.1875 47.68)
 *
 * REDDISH ORANGE BACKGROUND, DARK GRAY FOREGROUND
 * Background: #ff5133 - oklch(0.674 0.215 32.24)
 * Foreground: #2d2d2d - oklch(0.2972 0 0)
 * Decor: #f1f2ef - oklch(0.9596 0.0041 121.56)
 */

/** DARK SETS
 *
 * DARK GRAY BACKGROUND, LIGHT GRAY FOREGROUND
 * Background: #191b19 - oklch(0.2192 0.0049 145.41)
 * Foreground: #a4a9a5 - oklch(0.7296 0.008 151.84) (#fff also possible)
 *
 * DARK GRAY BACKGROUND, OFFWHITE & REDDISH ORANGE FOREGROUND
 * Background: #2d2d2d - oklch(0.2972 0 0)
 * Foreground: #f1f2ef - oklch(0.9596 0.0041 121.56)
 * Foreground2: #ff5133 - oklch(0.674 0.215 32.24)
 * Muted: #9ea7a6 - oklch(0.7209 0.0103 188.96) (or opacity from foreground?)
 */

function PageHome() {
  return (
    <>
      <HeroSection />
      <FragmentedGradient />
      <BenefitsSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-between pt-16">
      <div className="flex flex-1 flex-col items-center justify-center">
        <span className="absolute top-4 left-4 font-pixel-line text-[clamp(2rem,10vw,10rem)] opacity-20" aria-hidden>
          NAME
        </span>
        <div>Some boxed label here</div>
        <h1>Hero Section</h1>
        <p>Key Problem, Key Solution</p>
        <div>
          <button type="button">Primary CTA</button>
          <button type="button">Secondary CTA</button>
        </div>
      </div>
      <PartnersTicker />
    </section>
  );
}

// TODO: scroll offset to account for fixed header when visiting anchor links
function BenefitsSection() {
  return (
    <section id="benefits" className="px-4 py-8">
      <span className="mb-2 bg-landing-primary px-2 py-0.5 font-mono text-landing-background tabular-nums">01</span>
      <h2 className="indent-[-0.05em] text-7xl font-bold tracking-tighter text-landing-primary">SOLVING [REDACTED]</h2>
      <p>Focus on how it helps user instead of what features it has</p>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="grid grid-cols-2 bg-landing-primary px-4 py-8">
      <div>
        <span className="mb-2 bg-landing-background px-2 py-0.5 font-mono text-landing-primary tabular-nums">02</span>
        <h2 className="indent-[-0.05em] text-7xl font-bold tracking-tighter text-landing-background">
          HOW IT WORKS SECTION
        </h2>
        <p>Explain how to get started in 3 simple steps</p>
      </div>
      <ol className="grid">
        <li>
          <h3>Step 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </li>
        <li>
          <h3>Step 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </li>
        <li>
          <h3>Step 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </li>
      </ol>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing">
      <h2>Pricing Section</h2>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials">
      <h2>Testimonials Section</h2>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq">
      <h2>FAQ Section</h2>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta">
      <h2>CTA Section</h2>
    </section>
  );
}
