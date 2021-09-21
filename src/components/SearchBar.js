import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar() {
  return (
    <div>
      <input type="text" data-testid="search-input" />
      <label htmlFor="">
        <input type="radio" data-testid="ingredient-search-radio" name="radio" id='ingredient' />
      </label>

      <input type="radio" data-testid="name-search-radio" name="radio" />
      <input type="radio" data-testid="first-letter-search-radio" name="radio" />
    </div>
  );
}

export default SearchBar;
