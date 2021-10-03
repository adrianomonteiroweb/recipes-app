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
    <div>
      <Header title="Receitas Favoritas" />
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
      {fav && fav.map((
        { id, name, type, image, category, area, alcoholicOrNot },
        index,
      ) => (
        <div key={ index }>
          <Link to={ `${type}s/${id}` }>
            <img
              src={ image }
              data-testid={ `${index}-horizontal-image` }
              alt={ name }
              style={ { maxWidth: '20%' } }
            />
          </Link>
          <Link to={ `${type}s/${id}` }>
            <h1 data-testid={ `${index}-horizontal-name` }>{name}</h1>
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>
            {`${area} - ${category} ${alcoholicOrNot}`}
          </p>
          <Share type={ `${type}s` } id={ id } index={ index } />
          <button
            type="button"
            onClick={ () => removeFav(id) }
          >
            <img
              src={ blackHeartIcon }
              alt="blackHeartIcon"
              data-testid={ `${index}-horizontal-favorite-btn` }
            />
          </button>

        </div>
      ))}
    </div>
  );
};
export default RecipesFav;
