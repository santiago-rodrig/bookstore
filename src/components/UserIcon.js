import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ icon, className }) => (
  <div className={className}>{icon}</div>
);

Component.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Component;
