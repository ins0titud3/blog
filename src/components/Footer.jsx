import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background-color: #2d3748;
  padding: 60px 40px 30px;
  color: #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 40px 20px 20px;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const FooterBrand = styled.div`
  flex: 2;
`;

const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 16px;
  
  span {
    color: #9f7aea;
  }
`;

const FooterDescription = styled.p`
  color: #a0aec0;
  margin-bottom: 24px;
  max-width: 400px;
  line-height: 1.6;
`;

const FooterNav = styled.div`
  flex: 1;
`;

const FooterNavTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  color: #fff;
`;

const FooterNavList = styled.ul`
  list-style: none;
`;

const FooterNavItem = styled.li`
  margin-bottom: 12px;
  
  a {
    color: #a0aec0;
    transition: color 0.3s ease;
    
    &:hover {
      color: #9f7aea;
    }
  }
`;

const FooterDivider = styled.hr`
  border: none;
  border-top: 1px solid #4a5568;
  margin: 20px 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const FooterCopyright = styled.p`
  color: #a0aec0;
  font-size: 14px;
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled.a`
  color: #a0aec0;
  font-size: 18px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #9f7aea;
  }
`;

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterSection>
            <FooterContainer>
                <FooterTop>
                    <FooterBrand>
                        <FooterLogo>mind<span>flow</span></FooterLogo>
                        <FooterDescription>
                            Блог о веб-разработке, дизайне и личной эффективности. Делюсь знаниями, опытом и вдохновением для вашего творческого роста.
                        </FooterDescription>
                    </FooterBrand>

                    <FooterNav>
                        <FooterNavTitle>Навигация</FooterNavTitle>
                        <FooterNavList>
                            <FooterNavItem><a href="#hero">Главная</a></FooterNavItem>
                            <FooterNavItem><a href="#blog">Блог</a></FooterNavItem>
                            <FooterNavItem><a href="#about">Обо мне</a></FooterNavItem>
                            <FooterNavItem><a href="#contact">Контакты</a></FooterNavItem>
                        </FooterNavList>
                    </FooterNav>

                    <FooterNav>
                        <FooterNavTitle>Ресурсы</FooterNavTitle>
                        <FooterNavList>
                            <FooterNavItem><a href="#">Бесплатные материалы</a></FooterNavItem>
                            <FooterNavItem><a href="#">Рекомендации книг</a></FooterNavItem>
                            <FooterNavItem><a href="#">Курсы</a></FooterNavItem>
                            <FooterNavItem><a href="#">Полезные ссылки</a></FooterNavItem>
                        </FooterNavList>
                    </FooterNav>

                    <FooterNav>
                        <FooterNavTitle>Контакты</FooterNavTitle>
                        <FooterNavList>
                            <FooterNavItem><a href="mailto:hello@mindflow.blog">hello@mindflow.blog</a></FooterNavItem>
                            <FooterNavItem><a href="tel:+79991234567">+7 (999) 123-45-67</a></FooterNavItem>
                            <FooterNavItem><a href="#newsletter">Подписаться на рассылку</a></FooterNavItem>
                        </FooterNavList>
                    </FooterNav>
                </FooterTop>

                <FooterDivider />

                <FooterBottom>
                    <FooterCopyright>
                        © {currentYear} mindflow blog. Все права защищены.
                    </FooterCopyright>

                    <FooterSocial>
                        <SocialLink href="#" aria-label="Twitter">T</SocialLink>
                        <SocialLink href="#" aria-label="Instagram">I</SocialLink>
                        <SocialLink href="#" aria-label="LinkedIn">L</SocialLink>
                        <SocialLink href="#" aria-label="GitHub">G</SocialLink>
                    </FooterSocial>
                </FooterBottom>
            </FooterContainer>
        </FooterSection>
    );
};

export default Footer;