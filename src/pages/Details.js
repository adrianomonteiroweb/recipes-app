import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../components/Carousel';
import StartButton from '../components/StartButton';
import Share from '../components/Share';
import Favorite from '../components/Favorite';

const SIX = 6;

function Details({ match: { params: { id, type } } }) {
  const [key, keysId, meals] = (type === 'comidas')
    ? ['drinks', 'Drink'] : ['meals', 'Meal', true];

  const data = useFetch('', '', meals);

  if (data[key] && data[key].length > 2) {
    const recomendations = data[key].slice(0, SIX);

    return (
      <div>
        <Share id={ id } type={ type } />
        <Favorite id={ id } type={ type } />
        <Carousel recomendations={ recomendations } keys={ keysId } />
        <StartButton type={ type } id={ id } />

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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
