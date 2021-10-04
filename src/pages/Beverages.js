import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';
import MyContext from '../context/MyContext';
import BeverageCard from '../components/BeverageCard';
import Footer from '../components/Footer';
import Categories from '../components/Categories';

const TWELVE = 12;

function Beverages({ location: { state } }) {
  const { searchBar: { query, endpoint, setEndpoint, setQuery } } = useContext(MyContext);

  useEffect(() => {
    if (state && state.ingredient) {
      setEndpoint('ingredient');
      setQuery(state.ingredient);
    }
  }, [state]);

  const { drinks } = useFetch(query, endpoint);

  const categoriesData = useFetch('list', 'categories');

  if (drinks && drinks.length < 2) {
    return <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />;
  }

  if (drinks && categoriesData.drinks) {
    const newDrinks = drinks.slice(0, TWELVE);

    return (
      <div className=" container">
        <Header title="Bebidas" displaySearchBar />
        <Categories list={ categoriesData.drinks } />
        <section>
          {newDrinks
            .map((drink, i) => <BeverageCard key={ i } beverage={ drink } index={ i } />)}
        </section>
        <Footer />
      </div>
    );
  }

  if (drinks === null) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  return <h1>Loading...</h1>;
}

Beverages.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      ingredient: PropTypes.string,
    }),
  }),
};

Beverages.defaultProps = {
  location: {
    state: {
      ingredient: '',
    },
  },
};

export default Beverages;
