import React from 'react';
import * as PropTypes from 'prop-types';

function BlogPost({ post }) {
  return <p>{JSON.stringify(post)}</p>;
}

BlogPost.propTypes = {
  post: PropTypes.shape,
};

export default BlogPost;
