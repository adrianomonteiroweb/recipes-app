import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function RecipesMade() {
  const [texto, setTexto] = useState(false);
  const shareItem = (type, id) => {
    const URL = window.location.origin;
    copy(`${URL}/${type}s/${id}`);
    setTexto(true);
    const TIMER = 500;
    setTimeout(() => {
      setTexto(false);
    }, TIMER);
  };
  const [typeRecipes, setTypeRecipes] = useState(false);
  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setTypeRecipes(value);
  }, []);
  const selecType = (element) => {
    const value = JSON.parse(localStorage.getItem('doneRecipes'));
    setTypeRecipes(value.filter((recipes) => recipes.type.includes(element)));
  };

  return (
    <>
      <Header title="Receitas Feitas" />
      <h1>DoneRecipes</h1>
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => selecType('') }
        >
          all

        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => selecType('comida') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => selecType('bebida') }
        >
          Drinks
        </button>
      </div>
      {typeRecipes && typeRecipes.map((recipes, index) => (
        <div key={ recipes.id }>
          <Link to={ `${recipes.type}s/${recipes.id}` }>
            <img
              src={ recipes.image }
              data-testid={ `${index}-horizontal-image` }
              alt={ recipes.name }
              style={ { maxWidth: '100%' } }
            />
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>
            {`${recipes.area} - ${recipes.category} ${recipes.alcoholicOrNot}`}
          </p>
          <Link to={ `${recipes.type}s/${recipes.id}` }>
            <h3 data-testid={ `${index}-horizontal-name` }>
              {recipes.name}
            </h3>
          </Link>
          <p data-testid={ `${index}-horizontal-done-date` }>{recipes.doneDate}</p>
          {recipes.tags && recipes.tags.map((tag) => (
            <p
              key={ tag }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              {tag}
            </p>
          ))}
          <button type="button" onClick={ () => shareItem(recipes.type, recipes.id) }>
            <img
              src={ shareIcon }
              alt="shareIcon"
              data-testid={ `${index}-horizontal-share-btn` }
            />
          </button>
          {texto && <p>Link copiado!</p>}
        </div>
      ))}
      {(typeRecipes.length === 0) && <h1>Vazio</h1> }
    </>
  );
}
export default RecipesMade;
