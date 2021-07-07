import React from 'react';
import { Container } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Fade from 'components/Fade';
import Post from 'entities/Post';

const BlogPost = ({ post }) => {
  const { title, banner, body } = post;
  const img = getImage(banner);

  return (
    <div id="blog-post">
      <div className="blog-post-wrapper">
        <Fade delay={250}>
          <div className="blog-post-wrapper__image mb-4">
            <div className="thumbnail rounded">
              <GatsbyImage alt={title} image={img} />
            </div>
            <div className="title-box">
              <Container>
                <h2 className="title mb-4">{title}</h2>
              </Container>
            </div>
          </div>
        </Fade>
        <Container>
          <div className="blog-post-wrapper__text">{renderRichText(body)}</div>
        </Container>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  post: Post,
};

export default BlogPost;
