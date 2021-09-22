import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyContext from '../context/MyContext';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const { searchBar: { setEndpoint, setQuery } } = useContext(MyContext);
  const [filter, setFilter] = useState('');

  const logSearch = () => {
    if (searchQuery.length > 1 && filter === 'firstLetter') {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    setEndpoint(filter);
    setQuery(searchQuery);
  };

  return (
    <div className="">
      <input
        type="text"
        value={ searchQuery }
        data-testid="search-input"
        onChange={ ({ target }) => setSearchQuery(target.value) }
      />
      <div>

        <label htmlFor="ingredient">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="radio"
            id="ingredient"
            onChange={ ({ target }) => setFilter(target.id) }
          />
          Ingrediente
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            data-testid="name-search-radio"
            name="radio"
            id="name"
            onChange={ ({ target }) => setFilter(target.id) }
          />
          Nome
        </label>
        <label htmlFor="firstLetter">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            name="radio"
            id="firstLetter"
            onChange={ ({ target }) => setFilter(target.id) }
          />
          Primeira letra
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => logSearch() }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
