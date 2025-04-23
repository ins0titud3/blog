import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  min-height: 80vh;
  padding: 40px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4eaff 100%);

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 20px;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  padding-right: 60px;

  @media (max-width: 992px) {
    padding-right: 0;
    margin-bottom: 40px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 54px;
  margin-bottom: 20px;
  color: #2d3748;
  line-height: 1.1;

  span {
    color: #6b46c1;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  margin-bottom: 32px;
  color: #4a5568;
  max-width: 600px;

  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }
`;

const PrimaryButton = styled.a`
  display: inline-block;
  padding: 14px 28px;
  background-color: #6b46c1;
  color: #ffffff;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #553c9a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(107, 70, 193, 0.3);
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  padding: 14px 28px;
  background-color: transparent;
  color: #6b46c1;
  border: 2px solid #6b46c1;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(107, 70, 193, 0.05);
    transform: translateY(-2px);
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 992px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  max-width: 550px;
  height: 450px;
  background-color: #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background-image: url('https://i.pinimg.com/736x/a8/53/30/a85330384bfbd596457cef5337f8edd1.jpg');
  background-size: cover;
  background-position: center;

  @media (max-width: 992px) {
    height: 400px;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    height: 350px;
  }
`;

const Hero = () => {
    return (
        <HeroSection>
            <HeroContent>
                <HeroTitle>
                    Мысли, идеи и <span>вдохновение</span> для творческих людей
                </HeroTitle>
                <HeroSubtitle>
                    Делюсь своими размышлениями о дизайне, технологиях и саморазвитии. Присоединяйтесь к моему путешествию!
                </HeroSubtitle>
                <ButtonGroup>
                    <PrimaryButton href="#blog">Читать блог</PrimaryButton>
                    <SecondaryButton href="#about">Обо мне</SecondaryButton>
                </ButtonGroup>
            </HeroContent>
            <HeroImageContainer>
                <HeroImage />
            </HeroImageContainer>
        </HeroSection>
    );
};

export default Hero;