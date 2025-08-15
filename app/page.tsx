// app/page.tsx
import Script from "next/script";
// import Image from "next/image";
import DailyMenu from "./components/daily-menu/DailyMenu";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Events from "./components/events/Events";
import FullMenuPreview from "./components/full-menu-preview/FullMenuPreview";

export default function Home() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Drag Catering – Catering și restaurant în Iași",
    "url": "https://www.dragcatering.ro/",
    "description": "Catering și restaurant în Iași cu preparate românești pentru nunți, botezuri, aniversări și mese festive.",
    "inLanguage": "ro-RO",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.dragcatering.ro/og-default.jpg",
      "width": 1200,
      "height": 630
    },
    "publisher": {
      "@type": "Organization",
      "name": "Drag Catering",
      "url": "https://www.dragcatering.ro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dragcatering.ro/icon.png",
        "width": 512,
        "height": 512
      }
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Acasă",
        "item": "https://www.dragcatering.ro/"
      }
    ]
  };

  // Navigație principală (ajută la înțelegerea structurii site-ului)
  const siteNavJsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": [
      "Meniul zilei",
      "Meniu",
      "Evenimente",
      "Despre noi",
      "Contact"
    ],
    "url": [
      "https://www.dragcatering.ro/meniul-zilei",
      "https://www.dragcatering.ro/meniu",
      "https://www.dragcatering.ro/evenimente",
      "https://www.dragcatering.ro/despre",
      "https://www.dragcatering.ro/contact"
    ]
  };

  return (
    <>
      {/* JSON-LD specific pentru homepage (poate sta și în body; Google îl citește) */}
      <Script id="hp-webpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <Script id="hp-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="hp-sitenav" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavJsonLd) }} />

      {/* Conținutul homepage-ului */}
      <Hero />
      <DailyMenu />
      <FullMenuPreview />
      <Events />
      <About />
      <Contact />
    </>
  );
}
