import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './profile.css';

function Profile() {
  const [user, setUser] = useState({
    email: '',
  });
  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('user')) || [];
    setUser((prev) => ({ ...prev, email: value.email }));
  }, []);
  return (
    <div className="container">
      <Header title="Perfil" />
      <div>
        <h1 data-testid="profile-email" className="emailUser">{user.email}</h1>
      </div>
      <nav>
        <Link to="/receitas-feitas" style={ { textDecoration: 'none' } }>
          <div className="profileCard row flex-column">
            <h5 data-testid="profile-done-btn">Receitas Feitas </h5>
          </div>
        </Link>
        <Link to="/receitas-favoritas" style={ { textDecoration: 'none' } }>
          <div className="profileCard row flex-column">
            <h5 data-testid="profile-favorite-btn">Receitas Favoritas</h5>
          </div>
        </Link>
        <Link to="/" onClick={ () => localStorage.clear() } style={ { textDecoration: 'none' } }>
          <div className="profileCard row flex-column">
            <h5 data-testid="profile-logout-btn">Sair</h5>
          </div>
        </Link>
      </nav>
      <Footer />
    </div>
  );
}

export default Profile;
