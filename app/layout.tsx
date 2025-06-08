import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Siyoon Lee - Product-Minded Software Engineer",
  description:
    "Product-minded software engineer passionate about building impactful products from 0 to 1. Experience with Flutter, Ruby on Rails, and Next.js. I love K-POP",
  openGraph: {
    title: "Siyoon Lee",
    description:
      "Product-minded software engineer passionate about building impactful products from 0 to 1.",
    url: baseUrl,
    siteName: "Siyoon Lee",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "software engineer",
    "flutter",
    "next.js",
    "product development",
    "startup",
    "k-pop",
  ],
  authors: [{ name: "Siyoon Lee" }],
  creator: "Siyoon Lee",
  publisher: "Siyoon Lee",
  applicationName: "Siyoon Lee",
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx("text-black bg-white dark:text-white dark:bg-black")}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
