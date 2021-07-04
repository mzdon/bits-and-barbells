import React from 'react';
import * as PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Post from '../../entities/Post';
import Fade from '../Fade/Fade';
import useDeviceType from '../../utils/useDeviceType';
import { getPostedDate, getPostReadLength } from '../../utils/blogHelpers';

const PostPreview = ({ post }) => {
  const { isDesktop, isMobile } = useDeviceType();

  const { id, title, slug, banner, preview } = post;
  const img = getImage(banner);
  const postedDate = getPostedDate(post);
  const readLength = getPostReadLength(post);

  const PostLink = ({ children, ...rest }) => (
    <a href={`/blog/${slug}`} {...rest}>
      {children}
    </a>
  );

  PostLink.propTypes = {
    children: PropTypes.node,
  };

  return (
    <Row key={id}>
      <Col sm={12} md={{ span: 4, order: 'last' }}>
        <Fade right={isDesktop} bottom={isMobile} delay={250}>
          <PostLink className="blog-preview-wrapper__image">
            <div className="thumbnail">
              <GatsbyImage alt={title} image={img} />
            </div>
          </PostLink>
        </Fade>
      </Col>
      <Col sm={12} md={8}>
        <Fade left={isDesktop} bottom={isMobile} delay={200}>
          <h2 className="blog-preview-wrapper__title">
            <PostLink>{title}</PostLink>
          </h2>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} delay={300}>
          <PostLink className="blog-preview-wrapper__text">{renderRichText(preview)}</PostLink>
          <PostLink className="blog-preview-wrapper__metadata">
            <p>{`${postedDate} · ${readLength}`}</p>
          </PostLink>
        </Fade>
      </Col>
    </Row>
  );
};

PostPreview.propTypes = {
  post: Post,
};

export default PostPreview;
