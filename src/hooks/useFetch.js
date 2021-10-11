import { useEffect, useState } from 'react';

const returnEndpoint = (query) => ({
  name: () => `search.php?s=${query}`,
  ingredient: () => `filter.php?i=${query}`,
  firstLetter: () => `search.php?f=${query}`,
  categories: () => `list.php?c=${query}`,
  area: () => `filter.php?a=${query}`,
  areas: () => 'list.php?a=list',
  ingredients: () => 'list.php?i=list',
  byCategory: () => `filter.php?c=${query}`,
  id: () => `lookup.php?i=${query}`,
  random: () => 'random.php',
});

const useFetch = (query = '', endpoint = '', recipe) => {
  const [data, setData] = useState({});
  const page = recipe ? 'meal' : 'cocktail';

  const finalURL = endpoint ? returnEndpoint(query)[endpoint]() : `search.php?s=${query}`;

  const URL = `https://www.the${page}db.com/api/json/v1/1/${finalURL}`;
  console.log(URL);
  useEffect(() => {
    const fetchAPI = () => {
      fetch(URL).then((response) => response.json()).then((value) => setData(value));
    };
    fetchAPI();
  }, [URL]);

  return data;
};

export default useFetch;
