import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "@/app/lib/fontawesome"; // Import Font Awesome config

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trailer Load Planner",
  description:
    "Easily calculate load options for Pup, 50 ft, and Straight Truck setups.",
  metadataBase: new URL("https://lplanner.vercel.app"),
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Trailer Load Planner",
    description:
      "Calculate load options instantly for Pup, 50 ft, and Straight Trucks.",
    url: "https://lplanner.vercel.app",
    siteName: "Trailer Load Planner",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Trailer Load Planner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trailer Load Planner",
    description:
      "Instantly determine how your carts and bins fit across different trailer types.",
    creator: "Ryan Wilson",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[color:var(--color-background)] text-[color:var(--color-foreground)]`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
