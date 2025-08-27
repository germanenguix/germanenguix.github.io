import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing | Hola mundo",
  description: "Landing de ejemplo con Next.js y Tailwind",
  metadataBase: new URL("https://germanenguix.com"),
  openGraph: {
    title: "Landing | Hola mundo",
    description: "Landing de ejemplo con Next.js y Tailwind",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
