import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title }) {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <header>
      <div>
        <Link to="/perfil">
          <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
        </Link>
        <h1 data-testid="page-title">{title}</h1>
        <button type="button" onClick={ () => setSearchBar(!searchBar) }>
          <img src={ searchIcon } alt="Search" data-testid="search-top-btn" />
        </button>
      </div>
      {searchBar && <SearchBar />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
