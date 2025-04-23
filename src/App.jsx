import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import Hero from './components/Hero';
import BlogPosts from './components/BlogPosts';
import About from "./components/About";
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    background-color: #fafafa;
  }

  h1, h2, h3, h4 {
    font-weight: 700;
    line-height: 1.2;
    color: #111;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

const Main = styled.main``;

const Section = styled.section`
  scroll-margin-top: 80px;
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main>
                <Section id="hero"><Hero /></Section>
                <Section id="blog"><BlogPosts /></Section>
                <Section id="about"><About /></Section>
                <Section id="newsletter"><Newsletter /></Section>
                <Section id="contact"><Contact /></Section>
            </Main>
            <Footer />
        </>
    );
};

export default App;