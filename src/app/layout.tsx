import type { Metadata, Viewport } from "next";
import { Brand } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(Brand.website),
  title: {
    default: `${Brand.name} — ${Brand.tagline}`,
    template: `%s · ${Brand.name}`,
  },
  description: Brand.description,
  applicationName: Brand.name,
  authors: [{ name: Brand.name, url: Brand.website }],
  keywords: [
    "learn",
    "memory",
    "spaced repetition",
    "quiz",
    "knowledge",
    "study",
    "trivia",
    "education",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "1024x1024" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    url: Brand.website,
    title: `${Brand.name} — ${Brand.tagline}`,
    description: Brand.description,
    siteName: Brand.name,
    images: [{ url: Brand.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${Brand.name} — ${Brand.tagline}`,
    description: Brand.description,
    images: [Brand.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#60d1b9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
        <script
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
        <noscript>
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  );
}
