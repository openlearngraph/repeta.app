import Image from "next/image";
import Link from "next/link";
import { Brand } from "@/lib/brand";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-14 bg-white border-t border-black/5 mt-auto">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/icon.png" alt="" width={32} height={32} className="rounded-md" />
          <div>
            <p className="font-bold text-brand-dot">{Brand.name}</p>
            <p className="text-sm text-brand-ink/60">{Brand.tagline}</p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-brand-ink/70">
          <Link href="/privacy" className="hover:text-brand-ink">Privacy</Link>
          <Link href="/terms" className="hover:text-brand-ink">Terms</Link>
          <a href={`mailto:${Brand.supportEmail}`} className="hover:text-brand-ink">
            Support
          </a>
        </nav>

        <p className="text-sm text-brand-ink/50">
          © {year} {Brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
