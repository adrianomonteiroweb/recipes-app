import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './explore.css';
import Loading from './Loading';

function ExploreByIngredients({ match: { params: { type } } }) {
  const [mainKey, API, meals] = type === 'comidas'
    ? ['meals', 'meal', true] : ['drinks', 'cocktail', false];

  const data = useFetch('', 'ingredients', meals);

  if (data && data[mainKey]) {
    const TWELVE = 12;
    const ingredients = data[mainKey].slice(0, TWELVE);
    return (
      <div className="container">
        <Header title="Explorar Ingredientes" />
        <section className="container cards">
          {ingredients.map((ingredient, i) => {
            const ingredientKey = !meals ? 'strIngredient1' : 'strIngredient';
            const ingredientName = ingredient[ingredientKey];
            return (
              <Link
                to={ {
                  pathname: `/${type}`,
                  state: { ingredient: ingredientName },
                } }
                key={ i }
                className="card"
                data-testid={ `${i}-ingredient-card` }
              >
                <img
                  src={ `https://www.the${API}db.com/images/ingredients/${ingredientName}-Small.png` }
                  alt={ ingredient[ingredientKey] }
                  data-testid={ `${i}-card-img` }
                />
                <h3 data-testid={ `${i}-card-name` }>
                  {ingredient[ingredientKey]}
                </h3>
              </Link>
            );
          })}
        </section>
        <Footer />
      </div>
    );
  }

  return (<Loading />);
}

ExploreByIngredients.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ExploreByIngredients;
