import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'components/Fade';
import Title from 'components/Title';
import AboutImg from 'components/Image/AboutImg';
import PortfolioContext from 'context/context';
import useDeviceType from 'utils/useDeviceType';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;
  const { isDesktop, isMobile } = useDeviceType;

  return (
    <section id="about">
      <Container>
        <Fade bottom delay={200}>
          <Title title="About Me" />
        </Fade>
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom delay={300}>
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} delay={500}>
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                <p className="about-wrapper__info-text">{paragraphThree}</p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                      download="mzdon_resume"
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
