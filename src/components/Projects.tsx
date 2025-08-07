import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  background-color: #f8f8f8;
  padding: 6rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #1a1a1a;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div<{ $bgImage: string }>`
  height: 250px;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const ProjectFeature = styled.li`
  color: #444;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  &:before {
    content: '•';
    color: #1a1a1a;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 2px solid #1a1a1a;
  color: #1a1a1a;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: #1a1a1a;
    color: white;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Play to Sky',
      image: 'https://picsum.photos/800/600?random=1',
      description: 'Agence de marketing digital innovante spécialisée dans la transformation numérique des entreprises.',
      features: [
        'Stratégie marketing digitale',
        'Gestion des réseaux sociaux',
        'Création de contenu',
        'SEO & SEA',
        'Web design & développement'
      ]
    },
    {
      title: 'Aurom Group',
      image: 'https://picsum.photos/800/600?random=2',
      description: 'Excellence automobile : vente, achat et location de véhicules haut de gamme.',
      features: [
        'Vente de véhicules neufs et d\'occasion',
        'Location courte et longue durée',
        'Service de conciergerie automobile',
        'Import/Export de véhicules',
        'Entretien et maintenance premium'
      ]
    },
    {
      title: 'Grega Open Door',
      image: 'https://picsum.photos/800/600?random=3',
      description: 'Solutions immobilières sur mesure pour la gestion et la recherche de biens.',
      features: [
        'Chasse immobilière personnalisée',
        'Gestion locative complète',
        'Conciergerie immobilière',
        'Optimisation de patrimoine',
        'Conseil en investissement'
      ]
    }
  ];

  return (
    <ProjectsSection>
      <Container>
        <SectionTitle>Nos Projets Phares</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage $bgImage={project.image} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectFeatures>
                  {project.features.map((feature, idx) => (
                    <ProjectFeature key={idx}>{feature}</ProjectFeature>
                  ))}
                </ProjectFeatures>
                <ProjectLink href={`/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  En savoir plus
                </ProjectLink>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 