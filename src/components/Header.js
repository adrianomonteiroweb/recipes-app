import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  return (
    <div>
      <Link to="/perfil">
        <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
      </Link>
      <h1 data-testid="page-title">{title}</h1>
      <img src={ searchIcon } alt="Search" data-testid="search-top-btn" />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
