import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import {
  Cormorant_Garamond,
  Manrope,
} from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "reconnect",
  description: "for my pengu ♡",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${cormorant.variable} ${manrope.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}