import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://pasanm-portfolio.vercel.app";

const description =
  "Computer Science undergraduate at the University of Ruhuna, " +
  "focused on software engineering, full-stack development, " +
  "data science and machine learning.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Pasan Madushanka | Software Developer & Data Science",
    template: "%s | Pasan Madushanka",
  },

  description,

  authors: [{ name: "Pasan Madushanka" }],

  creator: "Pasan Madushanka",

  keywords: [
    "Pasan Madushanka",
    "Software Developer",
    "Computer Science",
    "University of Ruhuna",
    "Full Stack Developer",
    "Data Science",
    "Machine Learning",
    "Flutter",
    "Spring Boot",
    "Python",
    "Sri Lanka",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Pasan Madushanka Portfolio",
    title: "Pasan Madushanka | Software Developer",
    description,
  },

  twitter: {
    card: "summary",
    title: "Pasan Madushanka | Software Developer",
    description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
