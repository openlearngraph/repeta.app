import type { Metadata } from "next";
import Link from "next/link";
import { Brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${Brand.name} handles your data.`
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/" className="text-sm text-brand-dark hover:underline">
        ← Back to {Brand.name}
      </Link>
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-brand-ink/60">Last updated: 2026</p>

      <div className="prose mt-8 space-y-6 text-brand-ink/80 leading-relaxed">
        <p>
          {Brand.name} is built to be private by default. This page explains
          what data the app and this website collect, why, and how it is used.
        </p>

        <h2 className="text-2xl font-bold text-brand-ink">What we collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Anonymous visitor token.</strong> When you open the app for
            the first time, a random opaque token is generated on your device
            and sent with each request so your progress survives a relaunch.
            It is not linked to your name, email, phone, or any third-party
            identity.
          </li>
          <li>
            <strong>Learning activity.</strong> Topics opened, questions
            answered, and timestamps. We use this to compute your progress,
            schedule repetitions, and improve content quality. It stays
            associated only with the visitor token.
          </li>
          <li>
            <strong>Standard server logs.</strong> Our backend records request
            metadata (IP, timestamp, user agent) for security and abuse
            prevention. Logs are rotated and not shared with third parties.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-ink">What we do not collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>No name, email, phone number, or social profile.</li>
          <li>No precise location.</li>
          <li>No advertising identifiers.</li>
          <li>No third-party analytics, crash reporting, or marketing SDKs.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-ink">How to delete your data</h2>
        <p>
          Email{" "}
          <a
            href={`mailto:${Brand.supportEmail}`}
            className="text-brand-dark hover:underline"
          >
            {Brand.supportEmail}
          </a>{" "}
          with your visitor token (visible in the app under Profile) and we
          will remove all associated activity from our servers within 30 days.
        </p>

        <h2 className="text-2xl font-bold text-brand-ink">Contact</h2>
        <p>
          Questions about this policy? Reach out at{" "}
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
