import { Brand } from "@/lib/brand";

export function Download() {
  return (
    <section id="download" className="py-24 lg:py-32 bg-brand-gradient text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Start learning today.
        </h2>
        <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
          {Brand.name} is free. A few questions a day is all it takes.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={Brand.storeLinks.appStore}
            className="inline-flex items-center gap-3 rounded-2xl bg-white text-brand-ink px-6 py-4 hover:bg-brand-accent transition shadow-lg shadow-black/10"
            aria-label="Download on the App Store"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M16.4 12.6a4.4 4.4 0 0 1 2.1-3.7 4.5 4.5 0 0 0-3.5-1.9c-1.5-.2-3 .9-3.7.9-.8 0-2-.9-3.3-.8a4.7 4.7 0 0 0-4 2.4c-1.7 3-.4 7.4 1.3 9.8.8 1.2 1.8 2.5 3.1 2.5 1.2-.1 1.7-.8 3.2-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4a10.6 10.6 0 0 0 1.4-2.8 4.3 4.3 0 0 1-2.8-4ZM14 4.8A4.3 4.3 0 0 0 15 1.6a4.4 4.4 0 0 0-2.9 1.5 4.1 4.1 0 0 0-1 3.1 3.7 3.7 0 0 0 2.9-1.4Z" />
            </svg>
            <span className="text-left">
              <span className="block text-xs opacity-70">Download on the</span>
              <span className="block font-semibold text-base leading-tight">App Store</span>
            </span>
          </a>

          <a
            href={Brand.storeLinks.playStore}
            className="inline-flex items-center gap-3 rounded-2xl bg-white text-brand-ink px-6 py-4 hover:bg-brand-accent transition shadow-lg shadow-black/10"
            aria-label="Get it on Google Play"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M3.6 2.3 13.7 12 3.6 21.7a1.6 1.6 0 0 1-.6-1.3V3.6c0-.5.2-1 .6-1.3Zm10.8 11 2.6 2.5-12 6.9 9.4-9.4Zm0-2.6L5 1.3l12 6.9-2.6 2.5Zm5.2 4-3 1.7-2.7-2.6 2.7-2.6 3 1.7c1.1.6 1.1 2.2 0 2.8Z" />
            </svg>
            <span className="text-left">
              <span className="block text-xs opacity-70">Get it on</span>
              <span className="block font-semibold text-base leading-tight">Google Play</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
