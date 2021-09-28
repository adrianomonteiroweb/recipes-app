import React from 'react';
import PropTypes from 'prop-types';
import './carousel.css';

const Carousel = ({ recommendations, keys }) => (
  <div className="overflow-x">
    {recommendations.map((ele, i) => (
      <div data-testid={ `${i}-recomendation-card` } className="item" key={ i }>
        <img src={ ele[`str${keys}Thumb`] } alt="" />
        <p data-testid={ `${i}-recomendation-title` }>{ele[`str${keys}`]}</p>
      </div>
    ))}
  </div>
);

Carousel.propTypes = {
  recommendations: PropTypes.arrayOf(PropTypes.object).isRequired,
  keys: PropTypes.string.isRequired,
};

export default Carousel;
