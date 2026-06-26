import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Planilha Premium - Controle Financeiro 2026",
  description: "Mude seu financeiro em 2026 com a Planilha Premium. Controle seus gastos, saia das dívidas e tenha paz financeira.",
  openGraph: {
    title: "Planilha Premium - Controle Financeiro",
    description: "Transforme sua vida com uma planilha simples e eficiente",
    type: "website",
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
      className={`${poppins.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-poppins)" }}>
        {children}
      </body>
    </html>
  );
}
