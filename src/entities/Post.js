import * as PropTypes from 'prop-types';

const PostContent = PropTypes.shape({
  raw: PropTypes.string,
});

const Post = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  banner: PropTypes.shape({}),
  preview: PostContent,
  body: PostContent,
  updatedAt: PropTypes.string,
});

export default Post;
