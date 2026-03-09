import { IconAWS, IconLinear, IconMicrosoft } from "@/components/landing/PartnerIcons";

const PARTNERS = [
  { name: "Microsoft", icon: IconMicrosoft },
  { name: "AWS", icon: IconAWS },
  { name: "Linear", icon: IconLinear },
] as const;

// Meh TODO will figure out if I want a brutalist ticker or a dotted ticker

export function PartnersTicker() {
  return (
    <div className="flex h-24 items-center gap-8 overflow-hidden bg-landing-primary py-6 *:h-full **:fill-landing-primary-foreground">
      {PARTNERS.map((partner) => (
        <partner.icon key={partner.name} aria-label={partner.name} />
      ))}
    </div>
  );
}
