import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../components/Carousel';
import StartButton from '../components/StartButton';

const SIX = 6;

function Details({ match: { params: { id, type } } }) {
  const [key, keysId, meals] = (type === 'comidas')
    ? ['drinks', 'Drink'] : ['meals', 'Meal', true];

  const data = useFetch('', '', meals);

  if (data[key] && data[key].length > 2) {
    const recomendations = data[key].slice(0, SIX);

    return (
      <div>

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
