import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sunset Connect — Conoce a quienes están moviendo la ciudad",
  description: "Una comunidad curada de emprendedores, ejecutivos, artistas y creativos que comparten historias, descubren proyectos y crean nuevas colaboraciones.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-cobalt text-brand-white selection:bg-brand-coral selection:text-white overflow-x-hidden">
        {children}
        {modal}
      </body>
    </html>
  );
}
