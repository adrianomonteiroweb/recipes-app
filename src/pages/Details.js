import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './details.css';
import Carousel from '../components/Carousel';
import StartButton from '../components/StartButton';
import RecipeInstructions from '../components/RecipeInstructions';
import RecipeHeader from '../components/RecipeHeader';

const SIX = 6;

function Details({ match: { params: { id, type } } }) {
  const [mainKey, strMainKey, recKey, recKeysId, storageKey, meals] = (type === 'comidas')
    ? ['meals', 'Meal', 'drinks', 'Drink', 'meals', false]
    : ['drinks', 'Drink', 'meals', 'Meal', 'cocktails', true];

  const recommendationsData = useFetch('', '', meals);
  const recipeData = useFetch(id, 'id', !meals);

  useEffect(() => {
    if (localStorage.inProgressRecipes) {
      const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const newLocal = { ...local,
        [storageKey]: { ...local[storageKey] } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLocal));
    } else {
      console.log('else');
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        [storageKey]: {} }));
    }
  }, []);

  if (recommendationsData[recKey] && recipeData[mainKey]) {
    const recommendations = recommendationsData[recKey].slice(0, SIX);
    const getType = recipeData[mainKey][0];
    console.log(strMainKey);
    return (
      <>
        <RecipeHeader
          id={ id }
          type={ type }
          getType={ getType }
          strMainKey={ strMainKey }
        />
        <article>
          <h4>Ingredients</h4>
          <ol>
            { Object.keys(getType)
              .filter((key) => key.includes('Ingredient'))
              .map((meal, i) => (
                getType[meal] !== '' && getType[meal] !== null ? (
                  <li
                    key={ i }
                    data-testid={ `${i}-ingredient-name-and-measure` }
                  >
                    { `${getType[meal]} - ${getType[`strMeasure${i + 1}`]}` }
                  </li>) : undefined))}
          </ol>
          <RecipeInstructions getType={ getType } />
          {mainKey === 'meals' && <iframe
            data-testid="video"
            src={ getType.strYoutube }
            frameBorder="0"
            allow="autoplay; encrypted-media;"
            allowFullScreen
            title="Embedded youtube"
          />}
          <Carousel recommendations={ recommendations } keys={ recKeysId } />
          <StartButton type={ type } id={ id } getType={ getType } />
        </article>
      </>
    );
  }

  return (
    <section>
      <h1>Detalhes</h1>
    </section>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
