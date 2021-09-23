import React from 'react';
import PropTypes from 'prop-types';

function MealCard({ index, meal: { strMealThumb, strMeal } }) {
  return (
    <div data-testid={ `${index}-recipe-card` } className="card">
      <img
        src={ strMealThumb }
        alt={ strMeal }
        data-testid={ `${index}-card-img` }
        className="card-img-top"
      />
      <h3 data-testid={ `${index}-card-name` }>{strMeal}</h3>
    </div>
  );
}

MealCard.propTypes = {
  index: PropTypes.number.isRequired,
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
  }).isRequired,
};

export default MealCard;
