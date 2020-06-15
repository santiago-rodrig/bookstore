import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ text, className }) => (
  <div className={className}>{text}</div>
);

Component.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Component;
