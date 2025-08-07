import React from 'react';
import Carousel from '../components/Carousel';
import Introduction from '../components/Introduction';
import Stats from '../components/Stats';
import Projects from '../components/Projects';

const slides = [
  {
    image: 'https://picsum.photos/1920/1080?random=1',
    title: 'Play to Sky',
    description: 'Agence de marketing digital innovante, transformant la présence en ligne des entreprises avec des stratégies créatives et performantes',
    buttonText: 'Découvrir',
    buttonLink: '/play-to-sky'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=2',
    title: 'Aurom Group',
    description: 'Leader dans le secteur automobile : vente, achat et location de véhicules premium avec un service d\'excellence',
    buttonText: 'Explorer',
    buttonLink: '/aurom-group'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=3',
    title: 'Grega Open Door',
    description: 'Expert en gestion locative et chasse immobilière, offrant des solutions personnalisées pour votre patrimoine immobilier',
    buttonText: 'En savoir plus',
    buttonLink: '/grega-open-door'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=4',
    title: 'RJA GROUP',
    description: 'Holding d\'investissement dirigée par Robbin James Agoh, façonnant l\'avenir à travers des projets innovants',
    buttonText: 'Notre Vision',
    buttonLink: '/vision'
  }
];

const Home: React.FC = () => {
  return (
    <main>
      <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
        <Carousel slides={slides} />
      </div>
      <Introduction />
      <Stats />
      <Projects />
    </main>
  );
};

export default Home; 