import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease-in-out;
`;

const Slide = styled.div<{ $isActive: boolean }>`
  flex: 0 0 100%;
  position: relative;
  opacity: ${props => props.$isActive ? 1 : 0.5};
  transition: opacity 0.8s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%);
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  z-index: 2;
  width: 90%;
  max-width: 800px;
`;

const Title = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  line-height: 1.6;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: white;
    color: black;
    transform: translateY(-2px);
  }
`;

const NavigationButton = styled.button<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.$direction === 'left' ? 'left: 2rem;' : 'right: 2rem;'}
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  z-index: 3;
  opacity: 0.7;
  transition: all 0.3s ease;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 3;
`;

const ProgressDot = styled.div<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.$isActive ? 'white' : 'rgba(255,255,255,0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

interface CarouselProps {
  slides: {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const autoPlayTimer = setInterval(nextSlide, 5000);
    return () => clearInterval(autoPlayTimer);
  }, []);

  return (
    <CarouselContainer>
      <SlideContainer style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <Slide key={index} $isActive={index === currentSlide}>
            <SlideImage src={slide.image} alt={slide.title} />
            <SlideContent>
              <Title>{slide.title}</Title>
              <Description>{slide.description}</Description>
              <Button onClick={() => window.location.href = slide.buttonLink}>
                {slide.buttonText}
              </Button>
            </SlideContent>
          </Slide>
        ))}
      </SlideContainer>
      <NavigationButton $direction="left" onClick={prevSlide}>
        &#8249;
      </NavigationButton>
      <NavigationButton $direction="right" onClick={nextSlide}>
        &#8250;
      </NavigationButton>
      <ProgressBar>
        {slides.map((_, index) => (
          <ProgressDot
            key={index}
            $isActive={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
      </ProgressBar>
    </CarouselContainer>
  );
};

export default Carousel; 