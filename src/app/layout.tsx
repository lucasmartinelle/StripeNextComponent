import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import './globals.css'

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stripe paiement component",
  description: "Stripe paiement component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className + " bg-amber-50"}>{children}</body>
    </html>
  );
}
