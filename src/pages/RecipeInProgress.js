import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RecipeHeader from '../components/RecipeHeader';
import RecipeInstructions from '../components/RecipeInstructions';
import './recipeInProgress.css';
import useFetch from '../hooks/useFetch';

const setRecipeDone = (recipe, keys, type) => {
  const recipeDone = {
    id: recipe[`id${keys}`],
    type: type === 'comidas' ? 'comida' : 'bebida',
    area: recipe.strArea,
    category: recipe.strCategory || '',
    alcoholicOrNot: recipe.strAlcoholic || '',
    name: recipe[`str${keys}`],
    image: recipe[`str${keys}Thumb`],
    doneDate: new Date(),
    tags: [recipe.strTags] || [],
  };
  if (localStorage.doneRecipes) {
    const strDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    return localStorage.setItem('doneRecipes',
      JSON.stringify([...strDoneRecipes, recipeDone]));
  }
  return localStorage.setItem('doneRecipes', JSON.stringify([recipeDone]));
};

const RecipeInProgress = ({ match: { params: { id, type } } }) => {
  const [mainKey, storageKey, keys, meals] = (type === 'comidas')
    ? ['meals', 'meals', 'Meal', true] : ['drinks', 'cocktails', 'Drink'];

  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (local && local[storageKey]) {
      const recipesInProgress = local[storageKey][id] || [];
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...local,
        [storageKey]: {
          ...local[storageKey],
          [id]: recipesInProgress,
        },
      }));
      setSteps(recipesInProgress);
    } else {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        [storageKey]: { [id]: [] },
      }));
    }
  }, []);

  const data = useFetch(id, 'id', meals);

  const addToSteps = (i, newSteps, storage, parentNode) => {
    if (newSteps.every((step) => step !== i)) {
      parentNode.classList.remove('checked');
      setSteps([...newSteps, i]);
      localStorage.setItem('inProgressRecipes',
        JSON.stringify({
          ...storage,
          [storageKey]: { ...storage[storageKey],
            [id]: [...newSteps, i] },
        }));
    }
  };

  const handleClick = (target, i) => {
    const { parentNode } = target;

    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const newSteps = [...steps];
    if (target.checked) return addToSteps(i, newSteps, inProgress, parentNode);

    parentNode.classList.add('checked');
    newSteps.splice(newSteps.indexOf(i), 1);
    inProgress[storageKey] = { ...inProgress[storageKey], [id]: newSteps };
    setSteps(newSteps);
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
  };

  if (data[mainKey]) {
    const getType = data[mainKey][0];
    const ingredients = Object.keys(getType)
      .filter((key) => key.includes('Ingredient') && getType[key]);
    return (
      <div>
        <RecipeHeader getType={ getType } id={ id } type={ type } />
        <section>
          {ingredients
            .map((meal, i) => (

              <label
                htmlFor={ i }
                className={ steps && steps.some((step) => step === i) && 'checked' }
                key={ i }
                data-testid={ `${i}-ingredient-step` }
              >
                <input
                  onClick={ ({ target }) => handleClick(target, i) }
                  id={ i }
                  checked={ steps && steps.some((step) => step === i) }
                  type="checkbox"
                  value={ `${getType[meal]} - ${getType[`strMeasure${i + 1}`]}` }
                />
                { `${getType[meal]} - ${getType[`strMeasure${i + 1}`]}` }
              </label>
            ))}
        </section>
        <RecipeInstructions getType={ getType } />
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="finish-recipe-btn"
            disabled={ ingredients.length !== steps.length }
            onClick={ () => setRecipeDone(getType, keys, type) }
          >
            Finalizar receita

          </button>
        </Link>
      </div>
    );
  }

  return (<h1>Loading...</h1>);
};

RecipeInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
    }) }).isRequired,
};

export default RecipeInProgress;
