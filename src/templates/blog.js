import React from 'react';
import * as PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Blog from '../components/Blog';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Root = ({ pageContext: { posts } }) => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${title} Blog`}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <Blog posts={posts} />
    </>
  );
};

Root.propTypes = {
  pageContext: {
    posts: PropTypes.arrayOf(PropTypes.any),
  },
};

export default Root;
