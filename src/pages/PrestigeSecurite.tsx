import React from 'react';
import styled from 'styled-components';

const PrestigeSection = styled.main`
  background-color: #ffffff;
  color: #1a1a1a;
`;

const Hero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://picsum.photos/1920/1080?random=5');
  background-size: cover;
  background-position: center;
  padding: 8rem 2rem;
  text-align: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 4.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 1rem auto 0;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
`;

const ContentSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #1a1a1a;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: #f8f8f8;
  padding: 2.5rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const StructuredData = () => {
    const data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Prestige Sécurité",
      "image": "https://picsum.photos/1920/1080?random=5",
      "@id": "",
      "url": "https://VOTRE_SITE_WEB.COM/prestige-securite",
      "telephone": "+33-X-XX-XX-XX-XX",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "40 Rue Alexandre Dumas",
        "addressLocality": "Paris",
        "postalCode": "75011",
        "addressCountry": "FR"
      },
      "description": "Prestige Sécurité, une filiale de RJA Group, offre des solutions de sécurité privée haut de gamme pour les entreprises et les particuliers. Nous assurons la protection des biens et des personnes avec professionnalisme et discrétion.",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "sameAs": [
        "https://www.VOTRE_LINKEDIN.com/"
      ]
    };
    return (
        <script type="application/ld+json">
            {JSON.stringify(data)}
        </script>
    );
}


const PrestigeSecuritePage = () => {
  return (
    <>
      <StructuredData />
      <PrestigeSection>
        <Hero>
          <HeroTitle>Prestige Sécurité</HeroTitle>
          <HeroSubtitle>Votre partenaire de confiance pour une protection d'excellence. Une société du groupe RJA.</HeroSubtitle>
        </Hero>
        <ContentSection>
          <SectionTitle>Nos Services</SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <ServiceTitle>Surveillance Humaine</ServiceTitle>
              <ServiceDescription>Agents qualifiés (APS) pour la surveillance de sites, le contrôle d'accès et la gestion des flux.</ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Sécurité Événementielle</ServiceTitle>
              <ServiceDescription>Dispositifs sur mesure pour sécuriser vos événements publics et privés (concerts, salons, réceptions).</ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Protection Rapprochée</ServiceTitle>
              <ServiceDescription>Gardes du corps et agents A3P pour la protection des personnes à haute responsabilité.</ServiceDescription>
            </ServiceCard>
             <ServiceCard>
              <ServiceTitle>Audit & Conseil</ServiceTitle>
              <ServiceDescription>Analyse de vos risques et élaboration de schémas directeurs de sécurité pour optimiser votre protection.</ServiceDescription>
            </ServiceCard>
             <ServiceCard>
              <ServiceTitle>Télésurveillance</ServiceTitle>
              <ServiceDescription>Centres opérationnels 24/7 pour la surveillance à distance et l'intervention sur alarme.</ServiceDescription>
            </ServiceCard>
             <ServiceCard>
              <ServiceTitle>Sécurité Incendie (SSIAP)</ServiceTitle>
              <ServiceDescription>Agents certifiés SSIAP 1, 2 et 3 pour la prévention et la gestion des risques incendie.</ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </ContentSection>
      </PrestigeSection>
    </>
  );
};

export default PrestigeSecuritePage; 