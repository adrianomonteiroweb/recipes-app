import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';
import MyContext from '../context/MyContext';
import BeverageCard from '../components/BeverageCard';

const TWELVE = 12;

function Beverages() {
  const { searchBar: { query, endpoint } } = useContext(MyContext);

  const { drinks } = useFetch(query, endpoint);

  if (drinks && drinks.length < 2) {
    return <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />;
  }

  if (drinks) {
    const newDrinks = drinks.slice(0, TWELVE);

    return (
      <div className=" container">
        <Header title="Bebidas" />
        <section>
          {newDrinks
            .map((drink, i) => <BeverageCard key={ i } beverage={ drink } index={ i } />)}
        </section>
      </div>
    );
  }

  if (drinks === null) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  return <h1>Loading...</h1>;
}

export default Beverages;
