import React from 'react';
import * as PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import BlogPost from '../components/BlogPost';
import Header from '../components/Header/Header';
import Post from '../entities/Post';
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
      <Header />
      <BlogPost post={post} />
    </>
  );
};

Root.propTypes = {
  pageContext: PropTypes.shape({
    post: Post,
  }),
};

export default Root;
