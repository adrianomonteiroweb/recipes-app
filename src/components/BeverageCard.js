import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BeverageCard({ index, beverage: { strDrink, strDrinkThumb, idDrink } }) {
  return (
    <Link to={ `/bebidas/${idDrink}` }>
      <div data-testid={ `${index}-recipe-card` } className="card">
        <img
          src={ strDrinkThumb }
          alt=""
          data-testid={ `${index}-card-img` }
          className="card-img-top"
        />
        <h3 data-testid={ `${index}-card-name` }>{strDrink}</h3>
      </div>
    </Link>
  );
}

BeverageCard.propTypes = {
  index: PropTypes.number.isRequired,
  beverage: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
};

export default BeverageCard;
