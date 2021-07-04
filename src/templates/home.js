import React from 'react';
import * as PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import Header from '../components/Header/Header';
import Post from '../entities/Post';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Root = ({ pageContext: { posts } }) => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <App posts={posts} />
    </>
  );
};

Root.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.arrayOf(Post),
  }),
};

export default Root;
