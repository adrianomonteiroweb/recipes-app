import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './explore.css';

function Explore() {
  return (
    <div className="container">
      <Header title="Explorar" />
      <div>
        <Link
          to="/explorar/comidas"
          data-testid="explore-food"
          style={ { textDecoration: 'none' } }
          className="shadowBox row flex-column"
        >
          <h5> Explorar Comidas</h5>
        </Link>
        <Link
          to="/explorar/bebidas"
          data-testid="explore-drinks"
          className="shadowBox row flex-column"
          style={ { textDecoration: 'none' } }
        >
          <h5>Explorar Bebidas</h5>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
export default Explore;
