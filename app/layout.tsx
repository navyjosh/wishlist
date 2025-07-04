import { Providers } from "./providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Toaster} from 'react-hot-toast'

import LayoutShell from "@/LayoutShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open Gift Exchange",
  description: "A web app to create wishlists and also exchange gifts anonymously within groups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white`}
      >
        <Providers>
          <LayoutShell>
            {children}
            <Toaster position="top-right" />
          </LayoutShell>
        </Providers>
      </body>
    </html>
  );
}
