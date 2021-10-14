import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Header from '../components/Header';
import Share from '../components/Share';

const RecipesFav = () => {
  const [fav, setFav] = useState(false);

  const localFavi = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  useEffect(() => {
    setFav(localFavi);
  }, []);
  const selecType = (element) => {
    setFav(localFavi.filter((recipes) => recipes.type.includes(element)));
  };
  const removeFav = (id) => {
    const remove = localFavi.filter((i) => i.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(remove));
    setFav(remove);
  };
  return (
    <div className="allRender">
      <Header title="Receitas Favoritas" />
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
      {fav && fav.map((
        { id, name, type, image, category, area, alcoholicOrNot },
        index,
      ) => {
        const Typearea = area ? `${area} - ` : '';
        return (
          <div key={ index } className="allCards">
            <Link to={ `${type}s/${id}` }>
              <img
                className="imgCss"
                src={ image }
                data-testid={ `${index}-horizontal-image` }
                alt={ name }
                style={ { maxWidth: '100%' } }
              />
            </Link>
            <p data-testid={ `${index}-horizontal-top-text` } className="paraCss">
              {`${Typearea}  ${category} ${alcoholicOrNot}`}
            </p>
            <Link to={ `${type}s/${id}` }>

              <h3
                data-testid={ `${index}-horizontal-name` }
                className="recipeCss"
              >
                {name}
              </h3>
            </Link>
            <div className="groupButtons">
              <Share type={ `${type}s` } id={ id } index={ index } />
              <button
                type="button"
                onClick={ () => removeFav(id) }
                className="buttonClick"
              >
                <img
                  src={ blackHeartIcon }
                  alt="blackHeartIcon"
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  className="buttonImg"
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default RecipesFav;
