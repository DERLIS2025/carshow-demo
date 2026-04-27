import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAR SHOW Equipamientos | Accesorios automotrices en Paraguay",
  description:
    "Demo eCommerce premium para CAR SHOW Equipamientos: accesorios, promociones, sorteos y soluciones automotrices en Paraguay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
