import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useFetch from '../hooks/useFetch';

function ExploreByType({ match: { params: { type } } }) {
  const [meals, mainKey, keys] = type === 'comidas'
    ? [true, 'meals', 'Meal'] : [false, 'drinks', 'Drink'];

  const data = useFetch('', 'random', meals);

  if (data && data[mainKey]) {
    console.log(data);
    return (
      <>
        <h1>Explore</h1>
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
export default ExploreByType;
