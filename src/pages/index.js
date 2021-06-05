import React from 'react';
import * as PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Root = ({ data }) => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <App posts={data.posts} />
    </>
  );
};

Root.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};

export default Root;

export const pageQuery = graphql`
  query {
    posts: allContentfulPost(limit: 3) {
      nodes {
        id
        title
        banner {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        body {
          raw
        }
        createdAt
      }
    }
  }
`;
