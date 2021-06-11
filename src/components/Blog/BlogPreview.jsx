import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Fade from '../Fade/Fade';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import useDeviceType from '../../utils/useDeviceType';

const BlogPreview = () => {
  const { posts } = useContext(PortfolioContext);
  const { isDesktop, isMobile } = useDeviceType();

  return (
    <section id="blog-preview">
      <Container>
        <div className="blog-preview-wrapper">
          <Title title="Recent Articles" />
          {posts.nodes.map((post) => {
            const { id, title, banner, body } = post;
            const img = getImage(banner);

            return (
              <Row key={id}>
                <Fade right={isDesktop} bottom={isMobile} delay={250}>
                  <div className="blog-preview-wrapper__image mb-4">
                    <div className="thumbnail rounded">
                      <GatsbyImage alt={title} image={img} />
                    </div>
                    <div className="title-box">
                      <h2 className="title m-4">{title}</h2>
                    </div>
                  </div>
                </Fade>
                <Col sm={12}>
                  <Fade left={isDesktop} bottom={isMobile} delay={300}>
                    <div className="blog-preview-wrapper__text">{renderRichText(body)}</div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default BlogPreview;
