import React from 'react';
import RecipeHeader from '../components/RecipeHeader';
import RecipeInstructions from '../components/RecipeInstructions';
import './recipeInProgress.css';
import useFetch from '../hooks/useFetch';

const RecipeInProgress = ({ match: { params: { id, type } } }) => {
  const [mainKey, meals] = (type === 'comidas')
    ? ['meals', true] : ['drinks'];

  const data = useFetch(id, 'id', meals);

  if (data[mainKey]) {
    const getType = data[mainKey][0];
    return (
      <div>
        <RecipeHeader getType={ getType } id={ id } type={ type } />
        <section>
          { Object.keys(getType)
            .filter((key) => key.includes('Ingredient'))
            .map((meal, i) => (
              getType[meal] !== '' && getType[meal] !== null ? (
                <label htmlFor={ i } key={ i } data-testid={ `${i}-ingredient-step` }>
                  <input
                    id={ i }
                    type="checkbox"
                    value={ `${getType[meal]} - ${getType[`strMeasure${i + 1}`]}` }
                  />
                  { `${getType[meal]} - ${getType[`strMeasure${i + 1}`]}` }
                </label>
              ) : undefined))}
        </section>
        <RecipeInstructions getType={ getType } />
        <button type="button" data-testid="finish-recipe-btn">Finalizar receita</button>
      </div>
    );
  }

  return (<h1>Loading...</h1>);
};

export default RecipeInProgress;
