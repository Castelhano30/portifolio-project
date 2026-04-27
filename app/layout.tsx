import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Felipe Castelhano · Full Stack Engineer",
  description:
    "Portfólio de Felipe Castelhano — Desenvolvedor Full Stack com foco em web moderna e IA aplicada.",
  keywords: ["Full Stack", "React", "Next.js", "TypeScript", "IA", "Node.js"],
  authors: [{ name: "Felipe Castelhano" }],
  openGraph: {
    title: "Felipe Castelhano · Full Stack Engineer",
    description:
      "Portfólio de Felipe Castelhano — Desenvolvedor Full Stack com foco em web moderna e IA aplicada.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
