import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';
import './categories.css';

const FIVE = 5;

function Categories({ list }) {
  const categoriesList = list.slice(0, FIVE);
  const { searchBar: { setEndpoint, setQuery, query, endpoint } } = useContext(MyContext);

  const logSearch = (cat) => {
    if ((query === cat && endpoint) || !cat) {
      setEndpoint('');
      return setQuery('');
    }
    setEndpoint('byCategory');
    setQuery(cat);
  };

  return (
    <section className="categories">
      <button
        type="button"
        className="categories-button"
        onClick={ () => logSearch() }
        data-testid="All-category-filter"
      >
        All
      </button>
      {categoriesList.map(({ strCategory }, i) => (
        <button
          type="button"
          key={ i }
          className="categories-button"
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
