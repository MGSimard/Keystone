import { Link, createFileRoute } from "@tanstack/react-router";
import { FragmentedGradient } from "@/components/landing/FragmentedGradient";
import { PartnersTicker } from "@/components/landing/PartnersTicker";
import { Section } from "@/components/landing/Section";

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
    <section className="flex min-h-dvh flex-col">
      <div className="grid grow grid-cols-1 items-center [grid-template-areas:'stack'] *:[grid-area:stack] xl:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] *:xl:[grid-area:unset]">
        <div className="z-1 space-y-16 px-6 py-32 text-center md:px-16 xl:text-start">
          <div>
            <span className="mx-auto mb-2 block w-fit bg-landing-primary px-2 py-0.5 font-mono text-landing-background xl:mx-0 *:xl:text-shadow-none">
              TAG LABEL
            </span>
            <h1 className="text-[clamp(3rem,4vw,4rem)]/tight font-bold tracking-tighter uppercase text-shadow-lg xl:text-shadow-none">
              LOREM IPSUM DOLOR SIT AMET
            </h1>
          </div>
          <div className="space-y-6">
            <p className="text-balance text-muted-foreground text-shadow-sm xl:text-shadow-none">
              Cras dictum dolor vel eros congue, eget commodo dolor bibendum. Ut congue, est id varius congue.
            </p>
            <p className="text-balance text-shadow-sm xl:text-shadow-none">
              Etiam sed risus nec nibh scelerisque ullamcorper.
            </p>
            <div className="flex items-center justify-center gap-4 font-mono *:grid *:h-9 *:place-items-center *:px-4 xl:justify-start">
              <Link to="/" className="bg-landing-primary font-mono text-landing-primary-foreground">
                PRIMARY
              </Link>
              <Link
                to="/"
                className="text-sm text-muted-foreground text-shadow-md hover:text-landing-primary hover:underline focus-visible:text-landing-primary focus-visible:underline xl:text-shadow-none">
                LEARN MORE &gt;&gt;&gt;
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-full self-stretch opacity-50 xl:opacity-100">
          <div className="absolute inset-0 grid place-items-center font-pixel-line text-7xl opacity-20">COMPANY</div>
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="Scanning animation of a dithered circular glyph"
            className="size-full overflow-hidden object-cover"
            poster="/assets/images/hero-poster.webp">
            <source src="/assets/videos/hero-video.webm" type="video/webm" />
            <source src="/assets/videos/hero-video-fallback.webm" type="video/webm" />
          </video>
        </div>
      </div>
      <PartnersTicker />
    </section>
  );
}

function BenefitsSection() {
  return (
    <Section id="benefits">
      <span className="mb-2 bg-landing-primary px-2 py-0.5 font-mono text-landing-background tabular-nums">01</span>
      <h2 className="indent-[-0.05em] text-7xl font-bold tracking-tighter text-landing-primary">SOLVING [REDACTED]</h2>
      <p>Focus on how it helps user instead of what features it has</p>
    </Section>
  );
}

function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="bg-landing-primary">
      <span className="mb-2 bg-landing-background px-2 py-0.5 font-mono text-landing-primary tabular-nums">02</span>
      <h2 className="indent-[-0.05em] text-7xl font-bold tracking-tighter text-landing-background">
        HOW IT WORKS SECTION
      </h2>
      <p>Explain how to get started in 3 simple steps</p>
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
    </Section>
  );
}

function PricingSection() {
  return (
    <Section id="pricing">
      <h2>Pricing Section</h2>
    </Section>
  );
}

function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <h2>Testimonials Section</h2>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section id="faq">
      <h2>FAQ Section</h2>
    </Section>
  );
}

function CTASection() {
  return (
    <Section id="cta">
      <h2>CTA Section</h2>
    </Section>
  );
}
