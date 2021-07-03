import React from 'react';
import * as PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import BlogPost from '../components/BlogPost';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Root = ({ pageContext: { post } }) => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <BlogPost post={post} />
    </>
  );
};

Root.propTypes = {
  pageContext: {
    post: PropTypes.any,
  },
};

export default Root;
