import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Fade from 'components/Fade';
import PortfolioContext from 'context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade bottom delay={300}>
          <p className="hero-lead-in">{title}</p>
        </Fade>
        <Fade bottom delay={500}>
          <h1 className="hero-name">
            <span className="text-color-main">{name}</span>
          </h1>
        </Fade>
        <Fade bottom delay={800}>
          <h1 className="hero-lead-out">
            {subtitle}
            {'.'}
          </h1>
        </Fade>
        <Fade bottom delay={1300}>
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
