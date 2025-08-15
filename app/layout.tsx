import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dragcatering.ro"),
  title: { default: "Drag Catering", template: "%s | Drag Catering" },
  description:
    "Catering și restaurant în Iași cu preparate românești pentru nunți, botezuri, aniversări și mese festive, livrate cu gust și pasiune.",
  alternates: {
    canonical: "/",
    languages: { "ro-RO": "https://www.dragcatering.ro/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "CODUL_DE_VERIFICARE_DE_LA_SEARCH_CONSOLE", // înlocuiește când îl ai
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://www.dragcatering.ro",
    siteName: "Drag Catering",
    title: "Drag Catering – gust autentic românesc în Iași",
    description:
      "Catering și restaurant în Iași cu preparate românești pentru nunți, botezuri, aniversări și mese festive, livrate cu gust și pasiune.",
    images: [
      {
        url: "https://www.dragcatering.ro/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Platou cu preparate tradiționale Drag Catering",
      },
    ],
    locale: "ro_RO",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/icon.png", sizes: "180x180" }],
  },
  appLinks: { web: { url: "https://www.dragcatering.ro" } },
  category: "food",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Drag Catering",
  "url": "https://www.dragcatering.ro",
  "logo": "https://www.dragcatering.ro/icon.png",
  "image": "https://www.dragcatering.ro/og-default.jpg",
  "description": "Catering și restaurant în Iași cu preparate românești pentru nunți, botezuri, aniversări și mese festive.",
  "telephone": "+40 754 824 625",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bulevardul Poitiers 12",
    "addressLocality": "Iași",
    "postalCode": "700671",
    "addressCountry": "RO"
  },
  "servesCuisine": ["Romanian"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "10:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "24:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/dragcatering",
    "https://www.instagram.com/dragcatering/",
    "https://maps.app.goo.gl/9CUhbpa2H8r6MjvP9"
  ]
};


  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}>
      <head>
        <Script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
        >
          Mergi la conținut
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
