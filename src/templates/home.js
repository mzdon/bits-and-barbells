import React from 'react';
import * as PropTypes from 'prop-types';
import HomeScreen from 'screens/Home/Home';
import Post from 'entities/Post';
import { headData } from 'mock/data';
import Root from './root';

const Home = ({ pageContext: { posts } }) => {
  const { title } = headData;

  return (
    <Root title={title}>
      <HomeScreen posts={posts} />
    </Root>
  );
};

Home.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.arrayOf(Post),
  }),
};

export default Home;
