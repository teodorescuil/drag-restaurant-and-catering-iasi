import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description:
    "Termenii și condițiile de utilizare a site-ului Drag Catering și de furnizare a serviciilor de catering și restaurant în Iași.",
  alternates: { canonical: "/termeni-si-conditii" },
  openGraph: {
    title: "Termeni și condiții | Drag Catering",
    description:
      "Termenii și condițiile pentru utilizarea site-ului și comandarea serviciilor Drag Catering din Iași.",
    url: "https://www.dragcatering.ro/termeni-si-conditii",
    type: "article",
  },
};

export default function TermsPage() {
  const lastUpdated = "15 august 2025";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Termeni și condiții",
    url: "https://www.dragcatering.ro/termeni-si-conditii",
    inLanguage: "ro-RO",
    description:
      "Termenii și condițiile pentru utilizarea site-ului și comandarea serviciilor Drag Catering.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: "https://www.dragcatering.ro/" },
      { "@type": "ListItem", position: 2, name: "Termeni și condiții", item: "https://www.dragcatering.ro/termeni-si-conditii" },
    ],
  };

  return (
    <>
      {/* JSON-LD (ok și în body) */}
      <Script id="tc-webpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <Script id="tc-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="mt-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-playfair font-bold text-charcoal mb-2">Termeni și condiții</h1>
          <p className="text-sm text-gray-500">Ultima actualizare: {lastUpdated}</p>
        </header>

        <div className="prose prose-neutral max-w-none">
          <p>
            Prezenta pagină stabilește termenii și condițiile de utilizare a site-ului{" "}
            <strong>www.dragcatering.ro</strong> și a serviciilor oferite de
            <br />
            <strong>Drag Catering SRL</strong> (denumită în continuare „Furnizorul”). Prin accesarea sau utilizarea
            acestui site, respectiv prin plasarea unei comenzi, acceptați acești termeni.
            <br />Vă rugăm să îi citiți cu atenție.
          </p>

          <h2 className="mt-4 font-medium text-lg underline">1. Datele companiei</h2>
          <p>
            <strong>Drag Catering SRL</strong> <br />
            Sediu social: <em>Bulevardul Poitiers 12, Iași 700671, România</em> <br />
            CUI: <em>TODO: CUI</em> &nbsp;|&nbsp; Nr. Reg. Com.: <em>TODO</em> <br />
            Telefon: <a href="tel:+40754824625">+40 754 824 625</a> &nbsp;|&nbsp; E-mail:{" "}
            <a href="mailto:info@dragcatering.ro">info@dragcatering.ro</a>
          </p>

          <h2 className="mt-4 font-medium text-lg underline">2. Definiții</h2>
          <ul>
            <li>
              <strong>Client</strong> – orice persoană fizică sau juridică ce plasează o comandă sau solicită o ofertă.
            </li>
            <li>
              <strong>Servicii</strong> – preparare și livrare mâncare, catering pentru evenimente, restaurante/meniuri zilnice.
            </li>
            <li>
              <strong>Site</strong> – platforma online disponibilă la adresa <strong>www.dragcatering.ro</strong>.
            </li>
          </ul>

          <h2 className="mt-4 font-medium text-lg underline">3. Domeniul de aplicare și modificări</h2>
          <p>
            Termenii se aplică tuturor vizitelor pe Site și tuturor comenzilor/contractelor încheiate cu Furnizorul.
            Ne rezervăm dreptul de a actualiza termenii, versiunea curentă fiind disponibilă permanent pe această pagină.
          </p>

          <h2 className="mt-4 font-medium text-lg underline">4. Produse și servicii</h2>
          <ul>
            <li>Meniuri zilnice, platouri, preparate tradiționale românești;</li>
            <li>Catering pentru nunți, botezuri, aniversări, evenimente corporate;</li>
            <li>Personalizare meniuri în funcție de cerințele evenimentului și de disponibilitate.</li>
          </ul>
          <p>
            Imaginile au caracter ilustrativ. Disponibilitatea ingredientelor poate varia. Ne rezervăm dreptul de a ajusta
            temporar oferta în funcție de sezonalitate, stocuri și cerințe sanitare.
          </p>

          <h2 className="mt-4 font-medium text-lg underline">5. Plasarea comenzilor și acceptarea</h2>
          <ul>
            <li>Comenzile se pot plasa telefonic, prin e-mail sau prin formularele puse la dispoziție pe Site.</li>
            <li>
              Comanda devine fermă numai după <strong>confirmarea expresă</strong> (telefon/e-mail) din partea Furnizorului.
            </li>
            <li>
              Pentru evenimente, poate fi solicitat un <strong>avans</strong> (ex.: 30%) – <em>TODO: completați politica</em>.
            </li>
          </ul>

          <h2 className="mt-4 font-medium text-lg underline">6. Prețuri și plată</h2>
          <ul>
            <li>Prețurile sunt exprimate în RON; includ sau nu TVA conform mențiunilor – <em>TODO: clarificați TVA</em>.</li>
            <li>Modalități acceptate: numerar, card, transfer bancar – <em>TODO: completați</em>.</li>
            <li>Factura se emite conform datelor transmise de Client; Clientul este responsabil pentru corectitudinea acestora.</li>
          </ul>

          <h2 className="mt-4 font-medium text-lg underline">7. Livrare și ridicare</h2>
          <ul>
            <li>Livrarea se face în zonele acoperite – <em>TODO: delimitați aria și eventualele taxe</em>.</li>
            <li>Intervalele de livrare sunt orientative; pot apărea întârzieri din cauze externe (trafic, vreme, forță majoră).</li>
            <li>Ridicarea de la sediu este posibilă conform programului afișat.</li>
          </ul>

          <h2 className="mt-4 font-medium text-lg underline">8. Anulare, modificare și retur</h2>
          <ul>
            <li>
              Comenzile pentru evenimente pot fi <strong>anulate</strong> sau <strong>modificate</strong> cu cel puțin{" "}
              <em>TODO: X zile/ore</em> înainte; în caz contrar, avansul poate fi reținut parțial/total.
            </li>
            <li>
              Din motive de igienă și siguranță alimentară, <strong>produsele alimentare nu pot fi returnate</strong>
              după livrare, cu excepția cazurilor de neconformitate.
            </li>
            <li>
              În caz de neconformitate, vă rugăm să ne contactați în maximum <em>TODO: X ore</em> de la primire, cu dovezi (foto/descriere).
            </li>
          </ul>

          <h2 className="mt-4 font-medium text-lg underline">9. Alergeni și informații nutriționale</h2>
          <p>
            Anumite preparate pot conține alergeni (ex.: gluten, lactoză, ouă, nuci, semințe, țelină etc.). Dacă aveți
            intoleranțe sau alergii, vă rugăm să ne anunțați explicit înainte de comanda fermă. Vom depune toate eforturile
            pentru a evita contaminarea încrucișată, însă nu putem garanta absența totală a alergenilor.
          </p>

          <h2 className="mt-4 font-medium text-lg underline">10. Responsabilități</h2>
          <ul>
            <li>
              Furnizorul depune toate eforturile pentru ca informațiile de pe Site să fie corecte și actualizate, dar pot apărea
              erori de tipar sau diferențe între prezentare și produsul final.
            </li>
            <li>
              Nu răspundem pentru întreruperi/întârzieri cauzate de factori externi (pene de curent, internet, forță majoră).
            </li>
          </ul>

          <h2 className="mt-4 font-medium text-lg underline">11. Drepturi de proprietate intelectuală</h2>
          <p>
            Conținutul Site-ului (texte, imagini, logo-uri, elemente de design) aparține Drag Catering SRL și/sau partenerilor
            și este protejat de legislația privind drepturile de autor. Este interzisă copierea, distribuirea sau utilizarea
            acestuia fără acordul prealabil scris al deținătorilor drepturilor.
          </p>

          <h2 className="mt-4 font-medium text-lg underline">12. Protecția datelor</h2>
          <p>
            Prelucrarea datelor cu caracter personal se realizează conform <a href="/politica-confidentialitate">Politicii de confidențialitate</a>.
            Prin plasarea unei comenzi, confirmați că ați citit și înțeles această politică.
          </p>

          <h2 className="mt-4 font-medium text-lg underline">13. Legea aplicabilă și soluționarea litigiilor</h2>
          <p>
            Prezentul document este guvernat de legea română. Orice litigiu va fi soluționat pe cale amiabilă; în caz de eșec,
            va fi de competența instanțelor de la sediul Furnizorului, dacă legea nu prevede altfel.
          </p>

          <h2 className="mt-4 font-medium text-lg underline">14. Contact</h2>
          <p>
            Pentru întrebări sau sesizări privind Termenii și condițiile: <br />
            <strong>Drag Catering SRL</strong> – <a href="mailto:info@dragcatering.ro">info@dragcatering.ro</a> ·{" "}
            <a href="tel:+40754824625">+40 754 824 625</a>
          </p>
        </div>
      </section>
    </>
  );
}
