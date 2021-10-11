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
        >
          <div className="shadowBox row flex-column">
            <h5> Explorar Comidas</h5>
          </div>
        </Link>
        <Link
          to="/explorar/bebidas"
          data-testid="explore-drinks"
          className="link"
          style={ { textDecoration: 'none' } }
        >
          <div className="shadowBox row flex-column">
            <h5>Explorar Bebidas</h5>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
export default Explore;
