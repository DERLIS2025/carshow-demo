import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CAR SHOW Equipamientos | Accesorios automotrices en Paraguay",
    template: "%s | CAR SHOW Equipamientos",
  },
  description:
    "Demo eCommerce premium para CAR SHOW Equipamientos: accesorios, promociones, sorteos y soluciones automotrices en Paraguay.",
  keywords: [
    "CAR SHOW Paraguay",
    "CAR SHOW Equipamientos",
    "accesorios automotrices Paraguay",
    "equipamientos automotrices Paraguay",
    "luces LED para autos",
    "audio para auto",
    "cámaras de retroceso",
    "sensores de estacionamiento",
    "accesorios interiores para autos",
    "accesorios exteriores para autos",
    "sorteos CAR SHOW",
    "tienda automotriz Paraguay",
  ],
  authors: [{ name: "CAR SHOW Equipamientos" }],
  creator: "CAR SHOW Equipamientos",
  publisher: "CAR SHOW Equipamientos",
  category: "automotive",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: "https://autorepuestocompy.vercel.app",
    siteName: "CAR SHOW Equipamientos",
    title: "CAR SHOW Equipamientos | Accesorios automotrices en Paraguay",
    description:
      "ECommerce premium para CAR SHOW Equipamientos: accesorios, promociones, sorteos y soluciones automotrices en Paraguay.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAR SHOW Equipamientos | Accesorios automotrices en Paraguay",
    description:
      "Accesorios, equipamientos, promociones y sorteos automotrices en Paraguay.",
  },
  alternates: {
    canonical: "https://autorepuestocompy.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: "CAR SHOW Equipamientos",
    description:
      "Accesorios, equipamientos, promociones y soluciones automotrices en Paraguay.",
    url: "https://autorepuestocompy.vercel.app",
    telephone: "+595-981-000-000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Asunción",
      addressCountry: "PY",
    },
    areaServed: {
      "@type": "Country",
      name: "Paraguay",
    },
    priceRange: "$$",
    currenciesAccepted: "PYG",
    sameAs: [
      "https://instagram.com/carshowpy",
      "https://sorteocarshow.com.py/",
    ],
  };

  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}