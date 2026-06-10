import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://treecareofswfl.vercel.app"
  ),
  title: "Tree Care of SWFL LLC | Professional Tree Services — Cape Coral, FL",
  description:
    "33+ years of professional tree removal, trimming, stump grinding & 24/7 emergency tree services. Serving Cape Coral, Fort Myers, Naples & all Southwest Florida. Licensed & insured.",
  keywords: [
    "tree service",
    "tree removal",
    "tree trimming",
    "stump grinding",
    "emergency tree service",
    "arborist",
    "Cape Coral",
    "Fort Myers",
    "Naples",
    "Southwest Florida",
    "landscaping",
    "tree care",
    "SWFL",
  ],
  authors: [{ name: "Tree Care of SWFL LLC" }],
  robots: "index, follow",
  openGraph: {
    title: "Tree Care of SWFL LLC | Professional Tree Services",
    description:
      "33+ years of professional tree removal, trimming, stump grinding & 24/7 emergency services in Southwest Florida.",
    type: "website",
    locale: "en_US",
    siteName: "Tree Care of SWFL LLC",
    images: [
      {
        url: "/IMG_0477.jpg",
        width: 1200,
        height: 630,
        alt: "Tree Care of SWFL — Professional Tree Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tree Care of SWFL LLC | Professional Tree Services",
    description:
      "33+ years of professional tree removal, trimming, stump grinding & 24/7 emergency services in Southwest Florida.",
    images: ["/IMG_0477.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
