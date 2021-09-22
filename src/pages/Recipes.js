import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';
import MyContext from '../context/MyContext';
import MealCard from '../components/MealCard';

const TWELVE = 12;

function Recipes() {
  const { searchBar: { query, endpoint } } = useContext(MyContext);

  const { meals } = useFetch(query, endpoint, true);

  if (meals && meals.length < 2) {
    return <Redirect to={ `/comidas/${meals[0].idMeal}` } />;
  }

  if (meals) {
    const newMeals = meals.slice(0, TWELVE);
    console.log(newMeals);
    return (
      <div className="meals container">
        <Header title="Comidas" />
        <section>
          {newMeals.map((meal, i) => <MealCard meal={ meal } key={ i } index={ i } />)}
        </section>
      </div>
    );
  }

  if (meals === null) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  return <h1>Loading...</h1>;
}

export default Recipes;
