import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik-sans-serif",
  subsets: ["latin"], weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Tend-wellness-tracker",
  description: "An anonymous wellness check-in platform for remote teams to track mood, energy, and team well-being.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`}>
        {children}
      </body>
    </html>
  );
}
