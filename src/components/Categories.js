import React from 'react';
import PropTypes from 'prop-types';

const FIVE = 5;

function Categories({ list }) {
  const categoriesList = list.slice(0, FIVE);
  console.log(categoriesList);

  return (
    <section>
      {categoriesList.map(({ strCategory }, i) => (
        <button
          type="button"
          key={ i }
          data-testid={ `${strCategory}-category-filter` }
        >
          {strCategory}
        </button>))}
    </section>
  );
}

Categories.propTypes = {
  list: PropTypes.shape({
    slice: PropTypes.func.isRequired,
  }).isRequired,
};

export default Categories;
