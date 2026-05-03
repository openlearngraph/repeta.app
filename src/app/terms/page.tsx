import type { Metadata } from "next";
import Link from "next/link";
import { Brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of using ${Brand.name}.`
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/" className="text-sm text-brand-dark hover:underline">
        ← Back to {Brand.name}
      </Link>
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-brand-ink/60">Last updated: 2026</p>

      <div className="mt-8 space-y-6 text-brand-ink/80 leading-relaxed">
        <p>
          By using {Brand.name} you agree to these terms. {Brand.name} is
          provided as-is, free of charge, for personal, non-commercial
          learning. We may update the app, the content, or these terms at any
          time.
        </p>

        <h2 className="text-2xl font-bold text-brand-ink">Acceptable use</h2>
        <p>
          Don&apos;t attempt to disrupt the service, scrape it at scale, or
          reverse-engineer the backend. The content is curated for individual
          learning — not for redistribution, training third-party models, or
          resale.
        </p>

        <h2 className="text-2xl font-bold text-brand-ink">No warranty</h2>
        <p>
          Content is provided for educational purposes. We do our best to keep
          it accurate, but make no warranty of any kind. Always verify
          important facts with primary sources.
        </p>

        <h2 className="text-2xl font-bold text-brand-ink">Contact</h2>
        <p>
          Questions? Email{" "}
          <a
            href={`mailto:${Brand.supportEmail}`}
            className="text-brand-dark hover:underline"
          >
            {Brand.supportEmail}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
