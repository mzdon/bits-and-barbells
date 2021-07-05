import React from 'react';
import * as PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import { headData } from 'mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'style/main.scss';

const Root = ({ children, title }) => {
  const { lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      {children}
    </>
  );
};

Root.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Root;
