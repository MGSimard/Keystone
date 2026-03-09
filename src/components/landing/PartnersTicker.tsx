import {
  IconCloudflare,
  IconCursor,
  IconLinear,
  IconMicrosoft,
  IconStripe,
  IconVoidZero,
  IconHTMX,
} from "@/components/landing/PartnerIcons";

const PARTNERS = [
  { name: "Microsoft", icon: IconMicrosoft },
  { name: "Linear", icon: IconLinear },
  { name: "Cursor", icon: IconCursor },
  { name: "Void Zero", icon: IconVoidZero },
  { name: "Stripe", icon: IconStripe },
  { name: "Cloudflare", icon: IconCloudflare },
  { name: "HTMX", icon: IconHTMX },
] as const;

const TICKER_COPIES = 4;
const TICKER_DURATION = "20s";

export function PartnersTicker() {
  return (
    <div
      className="overflow-hidden bg-landing-primary"
      style={{ "--ticker-copies": TICKER_COPIES, "--ticker-duration": TICKER_DURATION } as React.CSSProperties}>
      <div className="animate-ticker flex w-max items-center gap-32 py-8 *:h-8 *:shrink-0 **:fill-landing-background">
        {Array.from({ length: TICKER_COPIES }, (_, i) =>
          PARTNERS.map((partner) => {
            const Icon = partner.icon;
            return (
              <Icon
                key={`${i}-${partner.name}`}
                aria-label={partner.name}
                role="img"
                className={partner.name === "Void Zero" ? "p-1.5" : ""}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
