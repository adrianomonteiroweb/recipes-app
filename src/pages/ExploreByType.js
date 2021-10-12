import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import useFetch from '../hooks/useFetch';
import Header from '../components/Header';
import './explore.css';
import Loading from './Loading';

function ExploreByType({ match: { params: { type } } }) {
  const [meals, mainKey, keys, headerTitle] = type === 'comidas'
    ? [true, 'meals', 'Meal', 'Comidas'] : [false, 'drinks', 'Drink', 'Bebidas'];

  const data = useFetch('', 'random', meals);

  if (data && data[mainKey]) {
    return (
      <div className="container">
        <Header title={ `Explorar ${headerTitle}` } />
        <div>
          <Link
            to={ `/explorar/${type}/ingredientes` }
            data-testid="explore-by-ingredient"
            className="link"
            style={ { textDecoration: 'none' } }
          >
            <div className="shadowBox">
              <h5>Por Ingredientes</h5>
            </div>
          </Link>
          { type === 'comidas' && (
            <Link
              to="/explorar/comidas/area"
              data-testid="explore-by-area"
              style={ { textDecoration: 'none' } }
            >
              <div className="shadowBox">
                <h5>Por Local de Origem</h5>
              </div>
            </Link>)}
          <Link
            to={ `/${type}/${data[mainKey][0][`id${keys}`]}` }
            data-testid="explore-surprise"
            style={ { textDecoration: 'none' } }
          >
            <div className="shadowBox ">
              <h5>Me Surpreenda!</h5>
            </div>
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  return (<Loading />);
}

ExploreByType.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.string,
    }),
  }).isRequired,
};

export default ExploreByType;
