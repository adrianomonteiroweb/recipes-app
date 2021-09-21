import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileIcon from '../images/profileIcon.svg';

function Header() {
  return (
    <div>
      <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
      <h1 data-testid="page-title">Receitas</h1>
      <button type="button" data-testid="search-top-btn">Buscar</button>
    </div>
  );
}

export default Header;
