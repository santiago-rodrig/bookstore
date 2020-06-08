import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ text, className }) => (
  <li className={className}>{text}</li>
);

Component.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Component;
