import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IdealX GmbH - Ihre Kompetenz im Fokus, unsere Logistik im Rücken",
  description: "IdealX GmbH ist Ihr verlässlicher Partner für maßgeschneiderte Logistiklösungen in Nürnberg und Umgebung. Mit über 25 Jahren Erfahrung bieten wir professionelle Logistikdienstleistungen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}