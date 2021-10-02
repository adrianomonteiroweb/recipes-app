import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import useFetch from '../hooks/useFetch';
import Header from '../components/Header';

function ExploreByType({ match: { params: { type } } }) {
  const [meals, mainKey, keys, headerTitle] = type === 'comidas'
    ? [true, 'meals', 'Meal', 'Comidas'] : [false, 'drinks', 'Drink', 'Bebidas'];

  const data = useFetch('', 'random', meals);

  if (data && data[mainKey]) {
    console.log(data);
    return (
      <>
        <Header title={ `Explorar ${headerTitle}` } />
        <Link to={ `/explorar/${type}/ingredientes` } data-testid="explore-by-ingredient">
          Por Ingredientes
        </Link>
        { type === 'comidas' && (
          <Link to="/explorar/comidas/area" data-testid="explore-by-area">
            Por Local de Origem
          </Link>)}
        <Link
          to={ `/${type}/${data[mainKey][0][`id${keys}`]}` }
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </Link>
        <Footer />
      </>
    );
  }

  return (<h1>Loading...</h1>);
}

ExploreByType.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.string,
    }),
  }).isRequired,
};

export default ExploreByType;
