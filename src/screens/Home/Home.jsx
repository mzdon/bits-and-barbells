import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { PortfolioProvider } from 'context/context';
import Post from 'entities/Post';
import { heroData, aboutData, projectsData, contactData, footerData } from 'mock/data';
import Footer from 'components/Footer';
import RecentPosts from './components/RecentPosts';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Home = ({ posts }) => {
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
      <RecentPosts posts={posts} />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
};

Home.propTypes = {
  posts: PropTypes.arrayOf(Post),
};

export default Home;
