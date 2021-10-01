import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';
import MyContext from '../context/MyContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExploreByIngredients({ match: { params: { type } } }) {
  const [mainKey, API, meals] = type === 'comidas'
    ? ['meals', 'meal', true] : ['drinks', 'cocktail', false];

  const { searchBar: { setQuery, setEndpoint } } = useContext(MyContext);
  const data = useFetch('', 'ingredients', meals);

  const handleClick = (name) => {
    setEndpoint('ing');
    setQuery(name);
  };

  if (data && data[mainKey]) {
    const TWELVE = 12;
    const ingredients = data[mainKey].splice(0, TWELVE);
    return (
      <>
        <Header title="Explorar Ingredientes" />
        <section className="container">
          {ingredients.map((ingredient, i) => {
            const ingredientKey = !meals ? 'strIngredient1' : 'strIngredient';
            const ingredientName = ingredient[ingredientKey];
            console.log(ingredientName);
            return (
              <Link
                onClick={ () => handleClick(ingredientName) }
                to={ `/${type}` }
                key={ i }
                className="card"
                data-testid={ `${i}-ingredient-card` }
              >
                <img
                  src={ `https://www.the${API}db.com/images/ingredients/${ingredientName}-Small.png` }
                  alt={ ingredient[ingredientKey] }
                  data-testid={ `${i}-card-img` }
                />
                <h2 data-testid={ `${i}-card-name` }>
                  {ingredient[ingredientKey]}
                </h2>
              </Link>
            );
          })}
        </section>
        <Footer />
      </>
    );
  }

  return (
    <h1>Loading...</h1>
  );
}
export default ExploreByIngredients;
