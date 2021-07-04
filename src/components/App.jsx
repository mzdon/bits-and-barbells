import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import Hero from './Hero/Hero';
import About from './About/About';
import PreviewsSection from './Blog/PreviewsSection';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App({ posts }) {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <PreviewsSection posts={posts} />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

App.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any),
};

export default App;
