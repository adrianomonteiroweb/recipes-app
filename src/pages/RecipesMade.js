import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import './RecipesMade.css';

const copy = require('clipboard-copy');

function RecipesMade() {
  const [texto, setTexto] = useState(false);
  const shareItem = (type, id) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setTexto(true);
    const TIMER = 500;
    setTimeout(() => {
      setTexto(false);
    }, TIMER);
  };
  const [typeRecipes, setTypeRecipes] = useState([]);
  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setTypeRecipes(value);
  }, []);
  if (typeRecipes.length === 0) {
    return (
      <h1>teste</h1>
    );
  }
  const selecType = (element) => {
    const value = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setTypeRecipes(value.filter((recipes) => recipes.type.includes(element)));
  };

  return (
    <div className="allRender">
      <Header title="Receitas" />
      <h1 className="titleCss">DoneRecipe</h1>
      <div className="divBtnCss">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => selecType('') }
          className="allBtn"
        >
          All

        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => selecType('comida') }
          className="foodBtn"
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => selecType('bebida') }
          className="drinkBtn"
        >
          Drinks
        </button>
      </div>
      <div className="afterMap">
        {typeRecipes.map((receita, index) => {
          const area = receita.area ? `${receita.area} - ` : '';
          return (
            <div key={ receita.id } className="allCards">
              <Link to={ `${receita.type}s/${receita.id}` }>
                <img
                  className="imgCss"
                  src={ receita.image }
                  data-testid={ `${index}-horizontal-image` }
                  alt={ receita.name }
                  style={ { maxWidth: '100%' } }
                />
              </Link>
              <p data-testid={ `${index}-horizontal-top-text` } className="paraCss">
                {`${area} ${receita.category} ${receita.alcoholicOrNot}`}
              </p>
              <Link to={ `${receita.type}s/${receita.id}` }>
                <h3 data-testid={ `${index}-horizontal-name` } className="recipeCss">
                  {receita.name}
                </h3>
              </Link>
              <p
                data-testid={ `${index}-horizontal-done-date` }
                className="dateCss"
              >
                {receita.doneDate}

              </p>
              <button
                type="button"
                onClick={ () => shareItem(receita.type, receita.id) }
                className="shareBtn"
              >
                <img
                  src={ shareIcon }
                  alt="shareIcon"
                  data-testid={ `${index}-horizontal-share-btn` }
                />
              </button>
              {receita.tags.map((element) => (
                <p
                  className="typeRecipeCss"
                  key={ element }
                  data-testid={ `${index}-${element}-horizontal-tag` }
                >
                  {element}
                </p>
              ))}
              {texto && <p>Link copiado!</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RecipesMade;
