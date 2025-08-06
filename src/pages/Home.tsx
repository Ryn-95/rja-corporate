import React from 'react';
import Carousel from '../components/Carousel';
import Introduction from '../components/Introduction';
import Stats from '../components/Stats';

const slides = [
  {
    image: 'https://picsum.photos/1920/1080?random=1',
    title: 'Notre Vision',
    description: 'Façonner l\'avenir à travers des projets innovants et durables',
    buttonText: 'Découvrir',
    buttonLink: '/vision'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=2',
    title: 'Nos Projets Phares',
    description: 'Des investissements stratégiques qui transforment les industries',
    buttonText: 'Explorer',
    buttonLink: '/projects'
  },
  {
    image: 'https://picsum.photos/1920/1080?random=3',
    title: 'Leadership',
    description: 'Robbin James Agoh - Fondateur & CEO de RJA GROUP',
    buttonText: 'En savoir plus',
    buttonLink: '/about'
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
    </main>
  );
};

export default Home; 