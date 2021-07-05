import React from 'react';
import * as PropTypes from 'prop-types';
import BlogScreen from 'screens/Blog/Blog';
import Post from 'entities/Post';
import { headData } from 'mock/data';
import Root from './root';

const Blog = ({ pageContext: { posts } }) => {
  const { title } = headData;

  return (
    <Root title={`${title} Blog`}>
      <BlogScreen posts={posts} />
    </Root>
  );
};

Blog.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.arrayOf(Post),
  }),
};

export default Blog;
