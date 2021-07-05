import React from 'react';
import * as PropTypes from 'prop-types';
import BlogPostScreen from 'screens/BlogPost/BlogPost';
import Post from 'entities/Post';
import Root from './root';

const BlogPost = ({ pageContext: { post } }) => {
  return (
    <Root title={post.title}>
      <BlogPostScreen post={post} />
    </Root>
  );
};

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    post: Post,
  }),
};

export default BlogPost;
