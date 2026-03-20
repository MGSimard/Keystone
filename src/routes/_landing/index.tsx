import { Link, createFileRoute } from "@tanstack/react-router";
import { FragmentedGradient } from "@/components/landing/FragmentedGradient";
import { PartnersTicker } from "@/components/landing/PartnersTicker";
import { Section } from "@/components/landing/Section";
import { Button } from "@/components/shadcnui/button";
import Accordion from "@/components/landing/Accordion";

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
      <div className="mx-auto grid w-full max-w-400 grow grid-cols-1 [grid-template-areas:'stack'] *:[grid-area:stack] xl:grid-cols-[min(45%,48rem)_minmax(0,1fr)] *:xl:[grid-area:unset]">
        <div className="self-center px-12 py-32 text-center md:px-16 xl:text-start">
          <span className="mx-auto mb-2 block w-fit bg-landing-primary px-2 py-0.5 font-mono text-landing-background xl:mx-0 *:xl:text-shadow-none">
            TAG LABEL
          </span>
          <h1 className="mx-auto mb-8 max-w-3xl text-[clamp(2rem,6vw,4rem)]/tight font-bold tracking-tighter uppercase xl:mx-0 xl:mb-16 xl:text-shadow-none dark:text-shadow-lg">
            LOREM IPSUM DOLOR SIT AMET
          </h1>
          <div className="mx-auto max-w-2xl space-y-6 xl:mx-0">
            <p className="text-balance text-muted-foreground xl:text-shadow-none dark:text-shadow-sm">
              Cras dictum dolor vel eros congue, eget commodo dolor bibendum. Ut congue, est id varius congue.
            </p>
            <p className="text-balance xl:text-shadow-none dark:text-shadow-sm">
              Etiam sed risus nec nibh scelerisque ullamcorper.
            </p>
            <div className="grid items-center justify-center gap-4 *:grid *:h-9 *:place-items-center *:px-4 xl:flex xl:flex-row xl:justify-start">
              <Button
                variant="default"
                nativeButton={false}
                className="rounded-none font-mono tracking-widest"
                render={<Link to="/" />}>
                PRIMARY
              </Button>
              <Button
                variant="link"
                nativeButton={false}
                className="rounded-none font-mono tracking-widest"
                render={<Link to="/" />}>
                LEARN MORE &gt;&gt;&gt;
              </Button>
            </div>
          </div>
        </div>
        <div className="relative -z-1 h-full self-stretch opacity-50 xl:opacity-100">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="Scanning animation of a dithered circular glyph"
            className="absolute inset-0 size-full overflow-visible object-cover invert motion-reduce:hidden dark:invert-0"
            poster="/assets/images/hero-poster.webp">
            <source src="/assets/videos/hero-video.webm" type="video/webm" />
          </video>
          <img
            src="/assets/images/hero-poster.webp"
            alt=""
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 hidden size-full object-cover invert motion-reduce:block dark:invert-0"
          />
        </div>
      </div>
      <PartnersTicker />
    </section>
  );
}

function BenefitsSection() {
  return (
    <Section id="benefits" label="01 / BENEFITS" heading="BENEFITS HEADING">
      <p className="text-muted-foreground">Focus on how it helps user instead of what features it has.</p>
    </Section>
  );
}

function HowItWorksSection() {
  return (
    <Section id="how-it-works" variant="primary" label="02 / HOW IT WORKS" heading="HOW IT WORKS HEADING">
      <p className="text-muted-foreground">Explain how to get started in 3 simple steps.</p>
    </Section>
  );
}

function PricingSection() {
  return (
    <Section id="pricing" label="03 / PRICING" heading="PRICING HEADING">
      <p className="text-muted-foreground">
        Helps users choose by showcasing difference in plans, don't hide anything. Add CTA to all plans and highlight
        the middle plan to guide users.
      </p>
    </Section>
  );
}

function TestimonialsSection() {
  return (
    <Section id="testimonials" label="04 / TESTIMONIALS" heading="TESTIMONIALS HEADING">
      <p className="text-muted-foreground">
        Place next to pricing to help with conversions. People feel relieved to see other people happy with their
        purchase.
      </p>
      <div className="grid grid-cols-3">
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </div>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section id="faq" label="05 / FREQUENTLY ASKED QUESTIONS" heading="FAQ HEADING">
      <p className="mb-2 text-wrap text-muted-foreground">
        Can't find what you're looking for?{" "}
        <Link
          to="/"
          className="font-mono text-xs font-medium tracking-widest whitespace-nowrap underline hover:text-landing-primary focus-visible:text-landing-primary">
          CONTACT US &gt;&gt;&gt;
        </Link>
      </p>
      <Accordion items={ACCORDION_ITEMS} />
    </Section>
  );
}
const ACCORDION_ITEMS = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco?",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem?",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    title: "At vero eos et accusamus et iusto odio dignissimos ducimus?",
    content:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
  },
  {
    title: "Temporibus autem quibusdam et aut officiis debitis aut rerum?",
    content:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet?",
    content:
      "Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
];

function CTASection() {
  return (
    <Section id="cta" label="06 / CTA" heading="CTA Heading">
      <p className="text-muted-foreground">Highlight it, make it stand out.</p>
    </Section>
  );
}
