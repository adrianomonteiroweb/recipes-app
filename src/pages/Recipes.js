import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';
import MyContext from '../context/MyContext';
import MealCard from '../components/MealCard';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import './recipes.css';

const TWELVE = 12;

function Recipes({ location: { state } }) {
  const { searchBar: { query, endpoint, setEndpoint, setQuery } } = useContext(MyContext);

  useEffect(() => {
    console.log(state);
    if (state && state.ingredient) {
      setEndpoint('ingredient');
      setQuery(state.ingredient);
    }
  }, [state]);

  const { meals } = useFetch(query, endpoint, true);

  const data = meals;
  console.log(data);
  const categoriesData = useFetch('list', 'categories', true);

  if (data && data.length < 2 && endpoint !== 'byCategory') {
    return <Redirect to={ `/comidas/${data[0].idMeal}` } />;
  }

  if (data && categoriesData.meals) {
    const newMeals = data.slice(0, TWELVE);

    return (
      <div className="container">
        <Header title="Comidas" displaySearchBar />
        <Categories list={ categoriesData.meals } />
        <section className="cards-section">
          {newMeals.map((meal, i) => <MealCard meal={ meal } key={ i } index={ i } />)}
        </section>
        <Footer />
      </div>
    );
  }

  if (data === null) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  return <h1>Loading...</h1>;
}

Recipes.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      ingredient: PropTypes.string,
    }),
  }),
};

Recipes.defaultProps = {
  location: {
    state: {
      ingredient: '',
    },
  },
};

export default Recipes;
