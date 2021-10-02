import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Share from '../components/Share';

function RecipesMade() {
  const [typeRecipes, setTypeRecipes] = useState(false);
  useEffect(() => {
    const recipesDone = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setTypeRecipes(recipesDone);
  }, []);

  const selecType = (element) => {
    const recipesDone = JSON.parse(localStorage.getItem('doneRecipes'));
    setTypeRecipes(recipesDone.filter((recipes) => recipes.type.includes(element)));
  };

  return (
    <>
      <Header title="Receitas" />
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
          <Share type={ `${recipes.type}s` } id={ recipes.id } index={ index } />
          {recipes.tags.map((element) => (
            <p
              key={ element }
              data-testid={ `${index}-${element}-horizontal-tag` }
            >
              {element}
            </p>
          ))}
        </div>
      ))}
      {(typeRecipes.length === 0) && <h1>Vazio</h1> }
    </>
  );
}
export default RecipesMade;
