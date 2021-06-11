import React from 'react';
import PropTypes from 'prop-types';
import ReactFade from 'react-reveal/Fade';

const FADE_DURATION = 750;
const FADE_DISTANCE = '30px';

const Fade = ({ children, ...rest }) => {
  return (
    <ReactFade duration={FADE_DURATION} distance={FADE_DISTANCE} {...rest}>
      {children}
    </ReactFade>
  );
};

Fade.propTypes = {
  children: PropTypes.node,
  ...ReactFade.propTypes,
};

export default Fade;
