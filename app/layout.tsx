import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Gym Tracker",
  description: "Track workouts, sets, reps, and progressive overload.",
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
      <body className="min-h-full bg-zinc-950 text-white">
        <header className="border-b border-zinc-800 bg-zinc-950/90">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold tracking-tight">
              Gym Tracker
            </Link>

            <nav className="flex flex-wrap gap-4 text-sm text-zinc-300">
              <Link href="/dashboard" className="hover:text-white">
                Dashboard
              </Link>
              <Link href="/exercises" className="hover:text-white">
                Exercises
              </Link>
              <Link href="/workouts" className="hover:text-white">
                Workouts
              </Link>
              <Link href="/login" className="hover:text-white">
                Login
              </Link>
              <Link href="/signup" className="hover:text-white">
                Signup
              </Link>
            </nav>
          </div>
        </header>

        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
