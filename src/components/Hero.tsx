import { Brand } from "@/lib/brand";
import { PhoneFrame } from "./PhoneFrame";

export function Hero() {
  return (
    <section className="bg-brand-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-white" />
        <div className="absolute -bottom-40 -left-24 w-[360px] h-[360px] rounded-full bg-white" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium tracking-wide uppercase">
            {Brand.tagline}
          </p>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            {Brand.heroTitle}
            <br />
            <span className="text-brand-accent">{Brand.heroSubtitle}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl">
            {Brand.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#download"
              className="inline-flex items-center rounded-full bg-white text-brand-ink px-6 py-3 text-base font-semibold hover:bg-brand-accent hover:text-brand-ink transition shadow-lg shadow-black/10"
            >
              Get the app
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-base font-semibold hover:bg-white/10 transition"
            >
              How it works
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-white/10 blur-2xl" />
            <PhoneFrame
              src="/screenshots/mobile/home-01.jpg"
              alt="Repeta home screen"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
