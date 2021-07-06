import React from 'react';
import * as PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Post from 'entities/Post';
import PostPreview from 'components/PostPreview';
import Title from 'components/Title';

const PreviewsSection = ({ posts }) => (
  <section id="recent-posts">
    <Container>
      <div className="recent-posts-wrapper">
        <Title title="Recent Posts" />
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </Container>
  </section>
);

PreviewsSection.propTypes = {
  posts: PropTypes.arrayOf(Post),
};

export default PreviewsSection;
