import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'components/Fade';

const Title = ({ title }) => (
  <Fade bottom delay={300} distance="0px">
    <h2 className="section-title">{title}</h2>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
