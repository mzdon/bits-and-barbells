import React from 'react';
import * as PropTypes from 'prop-types';
import BlogScreen from 'screens/Blog/Blog';
import Post from 'entities/Post';
import { headData } from 'mock/data';
import Root from './root';

const Blog = ({ pageContext: { posts, currentPage, numPages } }) => {
  const { title } = headData;

  return (
    <Root title={`${title} Blog`}>
      <BlogScreen posts={posts} currentPage={currentPage} numPages={numPages} />
    </Root>
  );
};

Blog.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.arrayOf(Post),
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
};

export default Blog;
