import type { Metadata } from "next";
import Script from "next/script";
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
  title: "read",
  description: "Personal reading tracker",
  icons: {
    icon: '/images/logo.webp'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        {/* Self-hosted analytics. Shared sardistic.github.io website id — this
            deploys to a project page on that host, so Umami sees one site and
            separates the projects by path. */}
        <Script
          src="https://analytics.sardistic.com/script.js"
          data-website-id="2d437215-6e06-4a59-9cd8-d9cc91a19263"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
