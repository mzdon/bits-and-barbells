import React from 'react';
import { Container } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Fade from 'components/Fade';
import Post from 'entities/Post';
import useDeviceType from 'utils/useDeviceType';

const BlogPost = ({ post }) => {
  const { isDesktop, isMobile } = useDeviceType();

  const { title, banner, body } = post;
  const img = getImage(banner);

  return (
    <section id="blog-preview">
      <Container>
        <div className="blog-preview-wrapper">
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
          <Fade left={isDesktop} bottom={isMobile} delay={300}>
            <div className="blog-preview-wrapper__text">{renderRichText(body)}</div>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

BlogPost.propTypes = {
  post: Post,
};

export default BlogPost;
