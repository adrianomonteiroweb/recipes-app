import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';

const SIX = 6;

function Details({ match: { params: { id, type } } }) {
  const [key, keysId, inProgressKey, meals] = (type === 'comidas')
    ? ['drinks', 'Drink', 'meals'] : ['meals', 'Meal', 'cocktails', true];

  // localStorage.setItem('doneRecipes', JSON.stringify([{ id }]));

  const data = useFetch('', '', meals);

  if (data[key] && data[key].length > 2) {
    const recomendations = data[key].slice(0, SIX);

    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

    const recipeDone = doneRecipes && doneRecipes.some((recipe) => id === recipe.id);
    const inProgress = inProgressRecipes && inProgressRecipes[inProgressKey][id];
    // .some((recipe) => id === recipe.id);
    // ? 'visible' : false;

    return (
      <div>

        <Carousel recomendations={ recomendations } keys={ keysId } />
        <Link to={ `/${type}/${id}/in-progress` }>
          <button
            type="button"
            className="fixed-bottom "
            hidden={ recipeDone }
            data-testid="start-recipe-btn"
          >
            {inProgress ? 'Continuar Receita' : 'Iniciar receita'}
          </button>
        </Link>

      </div>
    );
  }

  return (
    <section>
      <h1>Detalhes</h1>
    </section>
  );
}

Details.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
