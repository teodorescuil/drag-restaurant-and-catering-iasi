import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description:
    "Politica de confidențialitate Drag Catering - află cum colectăm, folosim și protejăm datele tale personale atunci când utilizezi site-ul și serviciile noastre.",
  alternates: { canonical: "/politica-confidentialitate" },
  openGraph: {
    title: "Politica de confidențialitate | Drag Catering",
    description:
      "Află cum colectăm, folosim și protejăm datele tale personale atunci când utilizezi site-ul și serviciile Drag Catering.",
    url: "https://www.dragcatering.ro/politica-confidentialitate",
    type: "article",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "15 august 2025"; // actualizează când faci modificări

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Politica de confidențialitate",
    url: "https://www.dragcatering.ro/politica-confidentialitate",
    inLanguage: "ro-RO",
    description:
      "Politica de confidențialitate a site-ului Drag Catering - cum colectăm, folosim și protejăm datele personale ale utilizatorilor.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: "https://www.dragcatering.ro/" },
      { "@type": "ListItem", position: 2, name: "Politica de confidențialitate", item: "https://www.dragcatering.ro/politica-confidentialitate" },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <Script id="pp-webpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <Script id="pp-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="mt-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-playfair font-bold text-charcoal mb-2">Politica de confidențialitate</h1>
          <p className="text-sm text-gray-500">Ultima actualizare: {lastUpdated}</p>
        </header>

        <div className="prose prose-neutral max-w-none">
          <p>
            Această politică de confidențialitate explică modul în care <strong>Drag Catering SRL</strong> colectează, folosește și protejează datele
            personale ale utilizatorilor atunci când vizitează site-ul <strong>www.dragcatering.ro</strong> sau folosesc serviciile noastre.
          </p>

          <h2 className="mt-4 font-medium text-lg underline">1. Datele de contact ale operatorului</h2>
          <p>
            Operator: <strong>Drag Catering SRL</strong> <br />
            Adresă: Bulevardul Poitiers 12, Iași 700671, România <br />
            E-mail: <a href="mailto:info@dragcatering.ro">info@dragcatering.ro</a> <br />
            Telefon: <a href="tel:+40754824625">+40 754 824 625</a>
          </p>

          <h2 className="mt-4 font-medium text-lg underline">2. Tipuri de date personale colectate</h2>
          <ul>
            <li>Date de identificare: nume, prenume, adresă.</li>
            <li>Date de contact: telefon, e-mail.</li>
            <li>Date de comandă: produse/servicii comandate, adrese de livrare.</li>
            <li>Date tehnice: adresa IP, tipul browser-ului, pagini vizitate (prin cookie-uri și tehnologii similare).</li>
          </ul>

          <h2 className="mt-4 font-medium text-lg underline">3. Modalități de colectare a datelor</h2>
          <ul>
            <li>Direct de la tine (formular de contact, comandă telefonică, comandă online).</li>
            <li>Automat prin cookie-uri și analytics atunci când navighezi pe site.</li>
          </ul>

          <h2 className="mt-4 font-medium text-lg underline">4. Scopul prelucrării</h2>
          <ul>
            <li>Procesarea comenzilor și livrarea produselor/serviciilor.</li>
            <li>Comunicare privind comenzi, oferte sau întrebări.</li>
            <li>Îmbunătățirea experienței pe site și a serviciilor oferite.</li>
            <li>Îndeplinirea obligațiilor legale (facturare, arhivare).</li>
          </ul>

          <h2 className="mt-4 font-medium text-lg underline">5. Temeiul legal al prelucrării</h2>
          <ul>
            <li>Executarea contractului (procesarea comenzilor).</li>
            <li>Consimțământul tău (marketing prin e-mail/SMS).</li>
            <li>Interesul legitim (securitatea site-ului, prevenirea fraudelor).</li>
            <li>Obligații legale (facturare, arhivare).</li>
          </ul>

          <h2 className="mt-4 font-medium text-lg underline">6. Stocarea datelor</h2>
          <p>
            Datele personale sunt păstrate doar cât este necesar pentru scopurile menționate și conform termenelor legale aplicabile.
          </p>

          <h2 className="mt-4 font-medium text-lg underline">7. Partajarea datelor</h2>
          <p>
            Nu vindem datele tale personale. Le putem partaja cu furnizori de servicii (curierat, procesatori de plăți) și autorități, dacă este necesar.
          </p>

          <h2 className="mt-4 font-medium text-lg underline">8. Drepturile tale</h2>
          <ul>
            <li>Dreptul de acces la date.</li>
            <li>Dreptul de rectificare sau ștergere.</li>
            <li>Dreptul de restricționare a prelucrării.</li>
            <li>Dreptul de portabilitate a datelor.</li>
            <li>Dreptul de opoziție la prelucrare.</li>
            <li>Dreptul de a depune plângere la ANSPDCP.</li>
          </ul>

          <h2 className="mt-4 font-medium text-lg underline">9. Cookie-uri și tehnologii similare</h2>
          <p>
            Folosim cookie-uri pentru a îmbunătăți funcționalitatea site-ului, pentru analiză și pentru marketing. Poți gestiona preferințele din setările browser-ului tău.
          </p>

          <h2 className="mt-4 font-medium text-lg underline">10. Securitatea datelor</h2>
          <p>
            Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele personale împotriva pierderii, accesului neautorizat sau distrugerii.
          </p>

          <h2 className="mt-4 font-medium text-lg underline">11. Modificări ale politicii</h2>
          <p>
            Putem actualiza această politică periodic. Orice modificare va fi publicată pe această pagină cu data actualizării.
          </p>

          <h2 className="mt-4 font-medium text-lg underline">12. Contact</h2>
          <p>
            Pentru întrebări legate de Politica de confidențialitate, ne poți contacta la{" "}
            <a href="mailto:info@dragcatering.ro">info@dragcatering.ro</a> sau{" "}
            <a href="tel:+40754824625">+40 754 824 625</a>.
          </p>
        </div>
      </section>
    </>
  );
}
