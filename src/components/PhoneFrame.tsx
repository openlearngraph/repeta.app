import Image from "next/image";

interface PhoneFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
}

/**
 * Minimal device frame that wraps a screenshot in a rounded "phone" silhouette.
 * Aspect ratio matches the source captures (1080x2340 ≈ 9:19.5).
 */
export function PhoneFrame({ src, alt, priority = false }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto w-full max-w-[260px] aspect-[9/19.5] rounded-[2.2rem] bg-brand-ink p-2 shadow-2xl shadow-brand-secondary/30 ring-1 ring-black/10">
      <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-brand">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 260px, 60vw"
          className="object-cover"
          priority={priority}
        />
      </div>
    </div>
  );
}
