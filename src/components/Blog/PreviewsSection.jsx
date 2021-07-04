import React from 'react';
import * as PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Post from '../../entities/Post';
import PostPreview from './PostPreview';
import Title from '../Title/Title';

const PreviewsSection = ({ posts }) => (
  <section id="blog-preview">
    <Container>
      <div className="blog-preview-wrapper">
        <Title title="Recent Posts" />
        {posts.map((post) => (
          <PostPreview post={post} />
        ))}
      </div>
    </Container>
  </section>
);

PreviewsSection.propTypes = {
  posts: PropTypes.arrayOf(Post),
};

export default PreviewsSection;
