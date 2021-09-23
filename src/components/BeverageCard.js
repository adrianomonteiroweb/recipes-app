import React from 'react';
import PropTypes from 'prop-types';

function BeverageCard({ index, beverage: { strDrink, strDrinkThumb } }) {
  return (
    <div data-testid={ `${index}-recipe-card` } className="card">
      <img
        src={ strDrinkThumb }
        alt=""
        data-testid={ `${index}-card-img` }
        className="card-img-top"
      />
      <h3 data-testid={ `${index}-card-name` }>{strDrink}</h3>
    </div>
  );
}

BeverageCard.propTypes = {
  index: PropTypes.number.isRequired,
  beverage: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
  }).isRequired,
};

export default BeverageCard;
