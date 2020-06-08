import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, color }) => (
  <header id="page-header">
    <h1 style={{ color }}>{title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Header;
