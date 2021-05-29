import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade bottom duration={1000} delay={500} distance="30px">
          <p className="hero-lead-in">{title}</p>
        </Fade>
        <Fade bottom duration={1000} delay={850} distance="30px">
          <h1 className="hero-name">
            <span className="text-color-main">{name}</span>
          </h1>
        </Fade>
        <Fade bottom duration={1000} delay={1000} distance="30px">
          <h1 className="hero-lead-out">
            {subtitle}
            {'.'}
          </h1>
        </Fade>
        <Fade bottom duration={1000} delay={1250} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
