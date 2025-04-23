import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.div`
  padding: 80px 40px;
  background-color: #f7fafc;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AboutImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const AboutImage = styled.div`
  width: 360px;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #e2e8f0;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background-image: url('https://img.freepik.com/free-photo/cheerful-readhead-bearded-man-glasses-white-tshirt-holding-laptop-hands_171337-7879.jpg?ga=GA1.1.1665949324.1734279694&semt=ais_hybrid&w=740');
  background-size: cover;
  background-position: center;
`;

const AboutContent = styled.div`
  flex: 1;
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 24px;
  color: #2d3748;
`;

const AboutDescription = styled.p`
  font-size: 18px;
  margin-bottom: 24px;
  color: #4a5568;
  line-height: 1.7;
`;

const SkillsContainer = styled.div`
  margin-top: 32px;
`;

const SkillsTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
  color: #2d3748;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SkillTag = styled.span`
  padding: 8px 16px;
  background-color: #fff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #4a5568;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const About = () => {
    const skills = [
        'React', 'JavaScript', 'TypeScript', 'UI/UX', 'Styled Components',
        'Дизайн', 'Блоггинг', 'SEO', 'Контент-маркетинг'
    ];

    return (
        <AboutSection>
            <AboutContainer>
                <AboutImageContainer>
                    <AboutImage />
                </AboutImageContainer>

                <AboutContent>
                    <AboutTitle>Обо мне</AboutTitle>
                    <AboutDescription>
                        Привет! Меня зовут Алексей, я frontend-разработчик и блогер с 6-летним опытом работы. Я увлечен созданием красивых и функциональных веб-интерфейсов, которые помогают бизнесу расти и развиваться.
                    </AboutDescription>
                    <AboutDescription>
                        В моем блоге я делюсь знаниями о современных технологиях веб-разработки, дизайне и личной эффективности. Моя миссия — помочь начинающим разработчикам и дизайнерам найти свой путь в индустрии.
                    </AboutDescription>

                    <SkillsContainer>
                        <SkillsTitle>Навыки и интересы</SkillsTitle>
                        <SkillTags>
                            {skills.map((skill, index) => (
                                <SkillTag key={index}>{skill}</SkillTag>
                            ))}
                        </SkillTags>
                    </SkillsContainer>
                </AboutContent>
            </AboutContainer>
        </AboutSection>
    );
};

export default About;