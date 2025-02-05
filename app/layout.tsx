import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Indie_Flower } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { DecorativeElements } from "@/components/decorative-elements";
import { ThemeLamp } from "@/components/theme-lamp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-indie-flower',
})

export const metadata: Metadata = {
  title: "Tom Zheng",
  description: "builder, engineer, creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${indieFlower.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <ThemeLamp />
          <DecorativeElements />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
