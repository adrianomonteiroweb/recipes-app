import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch';
import recipesContext from '../context/recipesContext';

function Beverages() {
  const { searchBar: { query, endpoint } } = useContext(recipesContext);

  useFetch(query, endpoint);

  return (
    <div className=" container">
      <Header title="Bebidas" />
      <section />
    </div>
  );
}

export default Beverages;
