import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import UserIcon from './UserIcon';

const Header = ({ title, color }) => (
  <header id="page-header">
    <div>
      <h1 style={{ color }}>{title}</h1>
      <Nav />
    </div>
    <UserIcon className="disabled-icon" icon={<i className="fas fa-user" />} />
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Header;
