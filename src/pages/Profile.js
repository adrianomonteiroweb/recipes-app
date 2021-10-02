import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const [user, setUser] = useState({
    email: 'a',
  });
  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('user')) || [];
    setUser((prev) => ({ ...prev, email: value.email }));
  }, []);
  return (
    <div className="meals">
      <Header title="Perfil" />
      <div>
        <h1 data-testid="profile-email">{user.email}</h1>
      </div>
      <nav>
        <Link to="/receitas-feitas">
          <h4 data-testid="profile-done-btn">Receitas Feitas </h4>
        </Link>
        <Link to="/receitas-favoritas">
          <h4 data-testid="profile-favorite-btn">Receitas Favoritas</h4>
        </Link>
        <Link to="/" onClick={ () => localStorage.clear() }>
          <h4 data-testid="profile-logout-btn">Sair</h4>
        </Link>
      </nav>
      <Footer />
    </div>
  );
}

export default Profile;
