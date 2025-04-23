import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #2d3748;

  span {
    color: #6b46c1;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 32px;
`;

const NavItem = styled.li`
  font-weight: 500;
  font-size: 16px;

  a {
    color: #4a5568;
    transition: color 0.3s ease;

    &:hover {
      color: #6b46c1;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  color: #2d3748;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;

  a {
    font-size: 18px;
    color: #4a5568;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #6b46c1;
    }
  }
`;

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <HeaderContainer>
                <Logo>mind<span>flow</span></Logo>
                <Nav>
                    <NavList>
                        <NavItem><a href="#hero">Главная</a></NavItem>
                        <NavItem><a href="#blog">Блог</a></NavItem>
                        <NavItem><a href="#about">Обо мне</a></NavItem>
                        <NavItem><a href="#newsletter">Подписка</a></NavItem>
                        <NavItem><a href="#contact">Контакты</a></NavItem>
                    </NavList>
                </Nav>
                <MobileMenuButton onClick={() => setIsMobileMenuOpen(prev => !prev)}>
                    {isMobileMenuOpen ? '✕' : '☰'}
                </MobileMenuButton>
            </HeaderContainer>

            {isMobileMenuOpen && (
                <MobileMenu>
                    <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Главная</a>
                    <a href="#blog" onClick={() => setIsMobileMenuOpen(false)}>Блог</a>
                    <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Обо мне</a>
                    <a href="#newsletter" onClick={() => setIsMobileMenuOpen(false)}>Подписка</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Контакты</a>
                </MobileMenu>
            )}
        </>
    );
};

export default Header;
