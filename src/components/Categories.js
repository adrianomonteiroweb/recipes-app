import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

const FIVE = 5;

function Categories({ list }) {
  const categoriesList = list.slice(0, FIVE);
  const { searchBar: { setEndpoint, setQuery } } = useContext(MyContext);

  const logSearch = (cat) => {
    setEndpoint('byCategory');
    setQuery(cat);
  };

  return (
    <section>
      {categoriesList.map(({ strCategory }, i) => (
        <button
          type="button"
          key={ i }
          data-testid={ `${strCategory}-category-filter` }
          onClick={ () => logSearch(strCategory) }
        >
          {strCategory}
        </button>))}
    </section>
  );
}

Categories.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categories;
