import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" data-testid="search-input" />
      <div>

        <label htmlFor="ingredient">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="radio"
            id="ingredient"
          />
          Ingrediente
        </label>
        <label htmlFor="name">
          <input type="radio" data-testid="name-search-radio" name="radio" id="name" />
          Nome
        </label>
        <label htmlFor="firstLetter">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            name="radio"
            id="firstLetter"
          />
          Primeira letra
        </label>
      </div>
      <button type="button" data-testid="exec-search-btn">Buscar</button>
    </div>
  );
}

export default SearchBar;
