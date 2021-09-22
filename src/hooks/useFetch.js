import { useEffect, useState } from 'react';

const returnEndpoint = (endpoint, query) => {
  if (endpoint === 'ingredient') return `filter.php?i=${query}`;
  if (endpoint === 'name') return `search.php?s=${query}`;
  if (endpoint === 'firstLetter') return `search.php?f=${query}`;
  return 'random.php';
};

const useFetch = async (query, endpoint, recipe) => {
  const [data, setData] = useState([]);
  const page = recipe ? 'themeal' : 'thecocktail';

  const URL = `https://www.${page}db.com/api/json/v1/1/${returnEndpoint(endpoint, query)}`;

  useEffect(() => {
    const fetchAPI = async () => {
      const jsonData = await fetch(URL).then((response) => response.json());
      setData(jsonData);
      console.log(jsonData);
    };

    fetchAPI();
  }, [URL]);

  return data;
};

export default useFetch;
