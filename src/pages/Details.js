import React from 'react';
import PropTypes from 'prop-types';

function Details({ history: { location: { pathname } } }) {
  console.log(pathname);

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
