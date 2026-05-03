interface Feature {
  title: string;
  body: string;
  icon: React.ReactNode;
}

const Icon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-12 h-12 rounded-xl bg-brand/15 text-brand-dark flex items-center justify-center">
    {children}
  </div>
);

const features: Feature[] = [
  {
    title: "Bite-sized sessions",
    body: "A handful of short questions whenever you've got a minute. Designed to fit a coffee break, not a study block.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      </Icon>
    )
  },
  {
    title: "Smart repetition",
    body: "Repeta resurfaces what you almost forgot, exactly when you need to see it again — so it sticks.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 12a9 9 0 0 1 15.5-6.3L21 8" />
          <path d="M21 4v4h-4" />
          <path d="M21 12a9 9 0 0 1-15.5 6.3L3 16" />
          <path d="M3 20v-4h4" />
        </svg>
      </Icon>
    )
  },
  {
    title: "Topics that matter",
    body: "History, science, geography, culture, and more. Curated for curiosity, not for cramming.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 19V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2Z" />
          <path d="M8 7h8M8 11h8M8 15h5" />
        </svg>
      </Icon>
    )
  },
  {
    title: "Track progress",
    body: "See what you've learned and what's coming up next. Your streak, your topics, your pace.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </svg>
      </Icon>
    )
  },
  {
    title: "No noise",
    body: "No ads, no notifications spam, no social scroll. Just learning, on your terms.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8" />
        </svg>
      </Icon>
    )
  },
  {
    title: "Anonymous-first",
    body: "No account required. No personal data collected. Your curiosity stays yours.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z" />
        </svg>
      </Icon>
    )
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-dark">
            Why Repeta
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Built to be remembered.
          </h2>
          <p className="mt-4 text-lg text-brand-ink/70">
            Most learning apps ask you to do more. Repeta asks you to do less,
            more often — and turns that into knowledge that lasts.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-black/5 bg-white p-6 hover:shadow-lg hover:shadow-brand-secondary/10 transition"
            >
              {f.icon}
              <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-brand-ink/70 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
