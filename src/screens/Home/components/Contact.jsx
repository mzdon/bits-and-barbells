import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from 'context/context';
import Fade from 'components/Fade';
import Title from 'components/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom delay={800}>
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${email}`}
            >
              {btn}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
