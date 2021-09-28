import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './details.css';
import Carousel from '../components/Carousel';
import StartButton from '../components/StartButton';
import Share from '../components/Share';
import Favorite from '../components/Favorite';

const SIX = 6;

function Details({ match: { params: { id, type } } }) {
  const [mainKey, strMainKey, recKey, recKeysId, meals] = (type === 'comidas')
    ? ['meals', 'Meal', 'drinks', 'Drink', false]
    : ['drinks', 'Drink', 'meals', 'Meal', true];

  const recommendationsData = useFetch('', '', meals);
  const recipeData = useFetch(id, 'id', !meals);

  if (recommendationsData[recKey] && recipeData[mainKey]) {
    const recommendations = recommendationsData[recKey].slice(0, SIX);
    const getType = recipeData[mainKey][0];
    const getCategory = getType.strAlcoholic ? 'strAlcoholic' : 'strCategory';
    console.log(strMainKey);
    return (
      <>
        <img
          src={ getType[`str${strMainKey}Thumb`] }
          data-testid="recipe-photo"
          className="thumb-details"
          alt={ getType[`str${strMainKey}`] }
        />
        <div className="div-details-title">
          <div>
            <h2 data-testid="recipe-title">{ getType[`str${strMainKey}`] }</h2>
          </div>
          <div>
            <Share id={ id } type={ type } />
            <Favorite
              id={ id }
              types={ type }
              getType={ getType }
              strMainKey={ strMainKey }
            />
          </div>
        </div>
        <span data-testid="recipe-category">{ getType[getCategory] }</span>
        <article>
          <h4>Ingredients</h4>
          <ol>
            { Object.keys(getType)
              .filter((key) => key.includes('Ingredient'))
              .map((meal, i) => (
                getType[meal] !== '' || getType[meal] === null ? (
                  <li
                    key={ i }
                    data-testid={ `${i}-ingredient-name-and-measure` }
                  >
                    { `${getType[meal]} - ${getType[`strMeasure${i + 1}`]}` }
                  </li>) : undefined))}
          </ol>
          <article data-testid="instructions" className="instructions">
            <h4>Instructions</h4>
            <p>{ getType.strInstructions }</p>
          </article>
          {mainKey === 'meals' && <iframe
            data-testid="video"
            src={ getType.strYoutube }
            frameBorder="0"
            allow="autoplay; encrypted-media;"
            allowFullScreen
            title="Embedded youtube"
          />}
          <Carousel recommendations={ recommendations } keys={ recKeysId } />
          <StartButton type={ type } id={ id } />
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
