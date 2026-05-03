import Image from "next/image";
import Link from "next/link";
import { Brand } from "@/lib/brand";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label={Brand.name}>
          <Image
            src="/icon.png"
            alt=""
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-brand-dot">
            {Brand.name}
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-brand-ink/80">
          <a href="#features" className="hover:text-brand-ink">Features</a>
          <a href="#screenshots" className="hover:text-brand-ink">Screens</a>
          <a href="#download" className="hover:text-brand-ink">Download</a>
        </nav>

        <a
          href="#download"
          className="inline-flex items-center rounded-full bg-brand-ink text-white px-4 py-2 text-sm font-semibold hover:bg-brand-ink/90 transition"
        >
          Get the app
        </a>
      </div>
    </header>
  );
}
