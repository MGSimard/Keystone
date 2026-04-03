import { Link } from "@tanstack/react-router";
import { Separator } from "@/components/shadcnui/separator";
import { WordMark } from "@/components/BrandIcons";
import {
  IconBrandX,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconBrandFacebookFilled,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer>
      <div className="bg-slashed h-24" aria-hidden />
      <div className="px-6 pt-16 pb-8 md:px-8">
        <div className="mx-auto max-w-400 space-y-4">
          <div className="mb-8 grid gap-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-12">
            <div className="col-span-full w-fit lg:col-span-1">
              <WordMark className="mb-4 lg:mb-8" aria-label="KEYSTONE Logo" />
              <ul
                className="flex flex-wrap items-center justify-between gap-4 *:shrink-0 [&_a]:hover:text-primary [&_a]:focus-visible:text-primary"
                aria-label="Socials">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <IconBrandFacebookFilled className="size-6" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <IconBrandX className="size-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <IconBrandInstagramFilled className="size-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <IconBrandLinkedinFilled className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 font-mono leading-none uppercase">PRODUCTS</h2>
              <ul className="space-y-2 capitalize [&_a]:hover:underline [&_a]:focus-visible:underline">
                <li>
                  <Link to="/">Number One</Link>
                </li>
                <li>
                  <Link to="/">Second Thing</Link>
                </li>
                <li>
                  <Link to="/">Third Item</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 font-mono leading-none uppercase">SUPPORT</h2>
              <ul className="space-y-2 capitalize [&_a]:hover:underline [&_a]:focus-visible:underline">
                <li>
                  <Link to="/">Help Center</Link>
                </li>
                <li>
                  <Link to="/">Customer Support</Link>
                </li>
                <li>
                  <Link to="/">Status Tracking</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 font-mono leading-none uppercase">COMPANY</h2>
              <ul className="space-y-2 capitalize [&_a]:hover:underline [&_a]:focus-visible:underline">
                <li>
                  <Link to="/">About Keystone</Link>
                </li>
                <li>
                  <Link to="/">Our Team</Link>
                </li>
                <li>
                  <Link to="/">Media Kit</Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator />
          <div className="flex flex-wrap justify-between gap-4">
            <ul className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground capitalize [&_a]:hover:text-foreground [&_a]:hover:underline [&_a]:focus-visible:text-foreground [&_a]:focus-visible:underline">
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">User Agreement</Link>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-foreground hover:underline focus-visible:text-foreground focus-visible:underline">
                  Cookie Settings
                </button>
              </li>
            </ul>
            <div className="font-mono text-xs text-muted uppercase">
              <span>2026 © Keystone. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
