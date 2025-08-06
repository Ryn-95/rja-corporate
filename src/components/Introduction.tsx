import React from 'react';
import styled from 'styled-components';

const IntroSection = styled.section`
  background-color: #fff;
  padding: 6rem 0;
  text-align: center;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Welcome = styled.div`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Name = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 4.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: #444;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const TitleGroup = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Crown = styled.span`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1a1a1a;
`;

const Company = styled.div`
  font-size: 1.4rem;
  color: #666;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid #1a1a1a;
  color: #1a1a1a;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 1rem;

  &:hover {
    background-color: #1a1a1a;
    color: white;
    transform: translateY(-2px);
  }
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
`;

const Introduction = () => {
  return (
    <IntroSection>
      <Container>
        <Welcome>Bienvenue dans l'univers de</Welcome>
        <Name>Robbin James Agoh</Name>
        <Description>
          Visionnaire de l'investissement et entrepreneur passionné, façonnant l'avenir 
          à travers des projets innovants et durables qui transforment les industries.
        </Description>
        <ButtonGroup>
          <Button onClick={() => window.location.href = '/vision'}>
            Découvrir notre vision
          </Button>
          <Button onClick={() => window.location.href = '/projects'}>
            Nos projets phares
          </Button>
        </ButtonGroup>
        <TitleGroup>
          <Crown>👑</Crown>
          <Title>Fondateur & CEO</Title>
          <Company>ROBBIN JAMES AGOH</Company>
          <Company>Groupe RJA GROUP</Company>
        </TitleGroup>
      </Container>
    </IntroSection>
  );
};

export default Introduction; 