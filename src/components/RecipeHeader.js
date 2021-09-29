import React from 'react';
import PropTypes from 'prop-types';
import Share from './Share';
import Favorite from './Favorite';

const RecipeHeader = ({ id, type, getType }) => {
  const [getCategory, strMainKey] = getType.strAlcoholic
    ? ['strAlcoholic', 'Drink'] : ['strCategory', 'Meal'];

  return (
    <section>
      <img
        src={ getType[`str${strMainKey}Thumb`] }
        data-testid="recipe-photo"
        className="thumb-details"
        alt={ getType[`str${strMainKey}`] }
      />
      <div className="div-details-title">
        <div>
          <h2 data-testid="recipe-title">{ getType[`str${strMainKey}`] }</h2>
        </div>
        <div>
          <Share id={ id } type={ type } />
          <Favorite
            id={ id }
            types={ type }
            getType={ getType }
            strMainKey={ strMainKey }
          />
        </div>
      </div>
      <span data-testid="recipe-category">{ getType[getCategory] }</span>
    </section>
  );
};

RecipeHeader.propTypes = {
  getType: PropTypes.shape({
    strAlcoholic: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default RecipeHeader;
