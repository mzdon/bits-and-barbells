import React from 'react';
import * as PropTypes from 'prop-types';

function Blog({ posts }) {
  return <p>{JSON.stringify(posts)}</p>;
}

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any),
};

export default Blog;
