import { Link, createFileRoute } from "@tanstack/react-router";
import { FragmentedGradient } from "@/components/landing/FragmentedGradient";
import { PartnersTicker } from "@/components/landing/PartnersTicker";
import { Button } from "@/components/shadcnui/button";
import Accordion from "@/components/landing/Accordion";
import { Section, HeadingLabel, Heading } from "@/components/landing/SectionPrimitives";

export const Route = createFileRoute("/_landing/")({
  component: PageHome,
});

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
      <SeparatorRow />
    </>
  );
}

function SeparatorRow() {
  return <div className="bg-slashed h-24" />;
}

function HeroSection() {
  return (
    <section className="flex min-h-dvh flex-col overflow-hidden">
      <div className="mx-auto grid w-full max-w-400 grow grid-cols-1 [grid-template-areas:'stack'] *:[grid-area:stack] xl:grid-cols-[min(45%,48rem)_minmax(0,1fr)] *:xl:[grid-area:unset]">
        <div className="self-center px-12 py-32 text-center md:px-16 xl:text-start">
          <span className="mx-auto mb-2 block w-fit bg-landing-primary px-2 py-0.5 font-mono text-landing-background uppercase xl:mx-0 *:xl:text-shadow-none">
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
                className="rounded-none font-mono tracking-widest uppercase"
                render={<Link to="/" />}>
                PRIMARY
              </Button>
              <Button
                variant="link"
                nativeButton={false}
                className="rounded-none font-mono tracking-widest uppercase"
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
    <Section id="benefits">
      <div className="mx-auto w-full max-w-360">
        <HeadingLabel label="01 / BENEFITS" />
        <Heading heading="BENEFITS HEADING" />
        <p className="text-muted-foreground">Focus on how it helps user instead of what features it has.</p>
      </div>
    </Section>
  );
}

function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <div className="mx-auto w-full max-w-360">
        <HeadingLabel label="02 / HOW IT WORKS" />
        <Heading heading="HOW IT WORKS HEADING" />
        <p className="text-muted-foreground">Explain how to get started in 3 simple steps.</p>
      </div>
    </Section>
  );
}

function PricingSection() {
  return (
    <Section id="pricing">
      <div className="mx-auto w-full max-w-360">
        <HeadingLabel label="03 / PRICING" />
        <Heading heading="PRICING HEADING" />
        <p className="text-muted-foreground">
          Helps users choose by showcasing difference in plans, don't hide anything. Add CTA to all plans and highlight
          the middle plan to guide users.
        </p>
      </div>
    </Section>
  );
}

function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <div className="mx-auto w-full max-w-360">
        <HeadingLabel label="04 / TESTIMONIALS" />
        <Heading heading="TESTIMONIALS HEADING" />
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
      </div>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section id="faq">
      <div className="mx-auto grid w-full max-w-360 gap-8 lg:grid-cols-3">
        <div>
          <HeadingLabel label="05 / FREQUENTLY ASKED QUESTIONS" />
          <Heading heading="FAQ HEADING" />
          <p className="mb-2 text-wrap text-muted-foreground">Can't find what you're looking for? </p>
          <Link
            to="/"
            className="font-mono text-xs font-medium tracking-widest whitespace-nowrap text-muted-foreground hover:text-foreground hover:underline focus-visible:text-foreground focus-visible:underline">
            CONTACT US &gt;&gt;&gt;
          </Link>
        </div>
        <Accordion items={ACCORDION_ITEMS} className="lg:col-span-2" />
      </div>
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
    <Section id="cta" className="bg-landing-primary">
      <div className="mx-auto w-full max-w-360">
        <HeadingLabel label="06 / CTA" className="bg-landing-background text-landing-primary" />
        <Heading heading="CTA Heading" className="text-landing-foreground" />
        <p className="text-muted-foreground">Highlight it, make it stand out.</p>
      </div>
    </Section>
  );
}
