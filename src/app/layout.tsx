import type { Metadata } from "next";

import { inter } from "../config/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Knitted Items",
    default: "Home - Knitted Items",
  },
  description:
    "Tienda virtual de cualquier tipo de productos tejidos, hechos a mano por mexicanos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
