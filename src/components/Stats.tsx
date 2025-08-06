import React from 'react';
import styled from 'styled-components';

const StatsSection = styled.section`
  background-color: #fff;
  padding: 4rem 0;
  color: #1a1a1a;
`;

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: #f8f8f8;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Stats = () => {
  const stats = [
    {
      value: '14 ans',
      label: 'Expérience',
      sublabel: 'Depuis 2010'
    },
    {
      value: 'PARIS',
      label: 'Siège Social',
      sublabel: 'France'
    },
    {
      value: '3.5B€',
      label: 'Portefeuille',
      sublabel: 'Actifs sous gestion'
    },
    {
      value: '25+',
      label: 'Projets',
      sublabel: 'Réalisations majeures'
    }
  ];

  return (
    <StatsSection>
      <StatsContainer>
        <Header>
          <Title>Excellence & Innovation</Title>
          <Subtitle>
            Robbin James Agoh, Fondateur & CEO de RJA GROUP, visionnaire de l'investissement 
            et entrepreneur passionné, façonnant l'avenir à travers des projets innovants.
          </Subtitle>
        </Header>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>
                {stat.label}
                <br />
                <span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>
                  {stat.sublabel}
                </span>
              </StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContainer>
    </StatsSection>
  );
};

export default Stats; 