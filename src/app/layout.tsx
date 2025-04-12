import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Loader",
  description: "Easily calculate load options for Pup, 50 ft, and Straight Truck setups.",
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
          <main className="flex-1 w-full max-w-4xl mx-auto p-2">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
