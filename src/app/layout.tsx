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
    default: "RD AUTOREPUESTO | Repuestos y Accesorios Automotrices en Paraguay",
    template: "%s | RD AUTOREPUESTO",
  },
  description:
    "RD AUTOREPUESTO - Tienda online de repuestos y accesorios automotrices en Paraguay. Frenos, suspensión, llantas, neumáticos, faros, audio y más. Envíos a Asunción, Gran Asunción e Interior. Garantía en todos los productos. Atención por WhatsApp.",
  keywords: [
    "repuestos automotrices Paraguay",
    "autorepuestos Asunción",
    "frenos Brembo",
    "suspensión KYB",
    "llantas deportivas",
    "neumáticos Michelin",
    "faros LED",
    "audio para auto",
    "accesorios automotrices",
    "repuestos Toyota",
    "repuestos Nissan",
    "repuestos Volkswagen",
    "tienda repuestos online",
    "envío repuestos Paraguay",
    "RD AUTOREPUESTO",
  ],
  authors: [{ name: "RD AUTOREPUESTO" }],
  creator: "RD AUTOREPUESTO",
  publisher: "RD AUTOREPUESTO",
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
    siteName: "RD AUTOREPUESTO",
    title: "RD AUTOREPUESTO | Repuestos y Accesorios Automotrices en Paraguay",
    description:
      "Tienda online de repuestos automotrices en Paraguay. Frenos, suspensión, llantas, neumáticos y más. Envíos a todo el país.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "RD AUTOREPUESTO - Repuestos automotrices en Paraguay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RD AUTOREPUESTO | Repuestos Automotrices Paraguay",
    description:
      "Frenos, suspensión, llantas, neumáticos y más. Envíos a todo Paraguay.",
    images: ["https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=630&fit=crop"],
  },
  alternates: {
    canonical: "https://autorepuestocompy.vercel.app",
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
  category: "automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="geo.region" content="PY-AS" />
        <meta name="geo.placename" content="Asunción, Paraguay" />
        <meta name="geo.position" content="-25.3005;-57.5759" />
        <meta name="ICBM" content="-25.3005, -57.5759" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
              name: "RD AUTOREPUESTO",
              description: "Repuestos y accesorios automotrices en Paraguay",
              url: "https://autorepuestocompy.vercel.app",
              logo: "https://autorepuestocompy.vercel.app/logo.png",
              image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=630&fit=crop",
              telephone: "+595-981-000-000",
              email: "ventas@rdautorepuesto.com.py",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Asunción",
                addressLocality: "Asunción",
                addressRegion: "Asunción",
                addressCountry: "PY",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -25.3005,
                longitude: -57.5759,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "12:00",
                },
              ],
              priceRange: "$$",
              paymentAccepted: "Transferencia, Tigo Money, Tarjeta, Efectivo",
              currenciesAccepted: "PYG",
              sameAs: [
                "https://instagram.com/rdautorepuesto",
                "https://facebook.com/rdautorepuesto",
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
