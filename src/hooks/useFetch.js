import { useEffect, useState } from 'react';

const returnEndpoint = (endpoint, query) => {
  if (endpoint === 'ingredient') return `filter.php?i=${query}`;
  if (endpoint === 'firstLetter') return `search.php?f=${query}`;
  if (endpoint === 'categories') return `list.php?c=${query}`;
  if (endpoint === 'byCategory') return `filter.php?c=${query}`;
  if (endpoint === 'id') return `lookup.php?i=${query}`;
  if (endpoint === 'random') return 'random.php';
  return `search.php?s=${query}`;
};

const useFetch = (query, endpoint, recipe) => {
  const [data, setData] = useState({});
  const page = recipe ? 'themeal' : 'thecocktail';

  const URL = `https://www.${page}db.com/api/json/v1/1/${returnEndpoint(endpoint, query)}`;

  useEffect(() => {
    const fetchAPI = () => {
      fetch(URL).then((response) => response.json()).then((value) => setData(value));
    };
    fetchAPI();
  }, [URL]);

  return data;
};

export default useFetch;
