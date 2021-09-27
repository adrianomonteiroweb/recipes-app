import React from 'react';
import PropTypes from 'prop-types';
import Share from '../components/Share';
import Favorite from '../components/Favorite';

function Details({ history: { location: { pathname } } }) {
  return (
    <section>
      <h1>Detalhes</h1>
      <Share rota={ pathname } />
      <Favorite rota={ pathname } />
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
