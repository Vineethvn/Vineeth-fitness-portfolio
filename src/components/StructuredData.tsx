import {
  profile,
  seo,
  eeat,
  faqs,
  certifications,
  contact,
} from "@/data/profile";

/**
 * JSON-LD structured data for SEO / AEO / GEO / EEAT.
 *
 * Emits a single @graph with interlinked entities so Google and AI answer
 * engines can build a confident knowledge graph around Vineeth as a real,
 * authoritative person and service. Server-rendered (no "use client").
 */
export function StructuredData() {
  const personId = `${seo.url}/#person`;
  const businessId = `${seo.url}/#business`;
  const websiteId = `${seo.url}/#website`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      // ── WebSite ──────────────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: seo.url,
        name: profile.name,
        description: seo.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },

      // ── Person (EEAT: who, expertise, authority) ─────────────
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        givenName: profile.firstName,
        familyName: profile.lastName,
        jobTitle: eeat.jobTitle,
        description: seo.description,
        url: seo.url,
        image: seo.ogImage,
        email: `mailto:${contact.email}`,
        knowsAbout: eeat.knowsAbout,
        sameAs: eeat.sameAs,
        worksFor: { "@id": businessId },
        hasCredential: certifications
          .filter((c) => c.status === "Certified")
          .map((c) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "certification",
            name: c.name,
            recognizedBy: {
              "@type": "Organization",
              name: c.body,
            },
          })),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Muscat",
          addressCountry: "OM",
        },
      },

      // ── ProfessionalService / LocalBusiness (GEO) ────────────
      {
        "@type": ["ProfessionalService", "HealthAndBeautyBusiness"],
        "@id": businessId,
        name: `${profile.name} — Fitness Coaching`,
        description: seo.description,
        url: seo.url,
        image: seo.ogImage,
        priceRange: "$$",
        founder: { "@id": personId },
        employee: { "@id": personId },
        email: `mailto:${contact.email}`,
        telephone: contact.phone,
        knowsAbout: eeat.knowsAbout,
        areaServed: eeat.servesAreas.map((a) => ({
          "@type": "AdministrativeArea",
          name: a,
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Muscat",
          addressCountry: "OM",
        },
        sameAs: eeat.sameAs,
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online & In-Person Personal Training",
            serviceType: "Fitness Coaching",
            provider: { "@id": personId },
          },
        },
      },

      // ── FAQPage (AEO) ────────────────────────────────────────
      {
        "@type": "FAQPage",
        "@id": `${seo.url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },

      // ── BreadcrumbList ───────────────────────────────────────
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: seo.url,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Structured data must be raw JSON in the DOM for crawlers to parse.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
