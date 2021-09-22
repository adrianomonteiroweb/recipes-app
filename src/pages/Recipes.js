import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';
import MyContext from '../context/MyContext';

function Recipes() {
  const { searchBar: { query, endpoint } } = useContext(MyContext);

  useFetch(query, endpoint, true);

  return (
    <div className="meals container">
      <Header title="Comidas" />
      <section />
    </div>
  );
}

export default Recipes;
