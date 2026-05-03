import { PhoneFrame } from "./PhoneFrame";

const shots = [
  { src: "/screenshots/mobile/home-01.jpg", alt: "Daily session and topics" },
  { src: "/screenshots/mobile/topic-01.jpg", alt: "Topic overview" },
  { src: "/screenshots/mobile/question-01.jpg", alt: "Answering a question" },
  { src: "/screenshots/mobile/answer-01.jpg", alt: "Reviewing the answer" },
  { src: "/screenshots/mobile/search-01.jpg", alt: "Search" }
];

export function Screenshots() {
  return (
    <section id="screenshots" className="py-24 lg:py-32 bg-brand-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/3 -left-40 w-[480px] h-[480px] rounded-full bg-brand" />
        <div className="absolute bottom-0 -right-40 w-[480px] h-[480px] rounded-full bg-brand-secondary" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand">
            Inside the app
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Calm, focused, made for daily use.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Swipe through real screens from the app. No clutter, no dark
            patterns — just questions and answers, on a clean canvas.
          </p>
        </div>

        <div className="mt-14 -mx-6 px-6 flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
          {shots.map((s, i) => (
            <div key={s.src} className="snap-center shrink-0 w-[60vw] sm:w-[280px]">
              <PhoneFrame src={s.src} alt={s.alt} priority={i < 2} />
              <p className="mt-4 text-center text-sm text-white/70">{s.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
