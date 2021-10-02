import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';
import MyContext from '../context/MyContext';
import MealCard from '../components/MealCard';

function ExploreByArea() {
  const { searchBar: { query, endpoint, setQuery, setEndpoint } } = useContext(MyContext);

  useEffect(() => {
    setEndpoint('');
    setQuery('');
  }, []);

  const areasData = useFetch('', 'areas', true);
  const { meals } = useFetch(query, endpoint, true);

  const handleChange = (newQuery) => {
    setQuery(newQuery);
    const newEndpoint = newQuery === '' ? '' : 'area';
    setEndpoint(newEndpoint);
  };

  if (areasData && meals) {
    const TWELVE = 12;
    const newMeals = meals.slice(0, TWELVE);
    return (
      <>
        <Header title="Explorar Origem" displaySearchBar />
        <select
          data-testid="explore-by-area-dropdown"
          onChange={ ({ target }) => handleChange(target.value) }
        >
          <option value="" data-testid="All-option">All</option>
          {areasData.meals.map(({ strArea }, i) => (
            <option
              key={ i }
              data-testid={ `${strArea}-option` }
              value={ strArea }
            >
              {strArea}
            </option>
          ))}
        </select>
        <section>
          {newMeals.map((meal, i) => (
            <MealCard key={ i } index={ i } meal={ meal } />
          ))}
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header title="Explorar Origem" displaySearchBar />
      <h1>Loading...</h1>
      <Footer />
    </>
  );
}
export default ExploreByArea;