import React from 'react';
import PropTypes from 'prop-types';

const RecipeInstructions = ({ getType }) => (
  <article data-testid="instructions" className="instructions">
    <h4>Instructions</h4>
    <p>{ getType.strInstructions }</p>
  </article>
);

RecipeInstructions.propTypes = {
  getType: PropTypes.shape({
    strInstructions: PropTypes.string,
  }).isRequired,
};

export default RecipeInstructions;
