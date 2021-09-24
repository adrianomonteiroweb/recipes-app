import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';

function MyProvider({ children }) {
  const [endpoint, setEndpoint] = useState('');
  const [query, setQuery] = useState('');
  const [login, setLogin] = useState({
    email: '',
    senha: '',
    statusLogin: true,
  });
  const [filter, setFilter] = useState('');

  const contextValue = {
    searchBar: {
      endpoint,
      setEndpoint,
      query,
      setQuery,
    },
    login,
    setLogin,
    filter: { filter, setFilter },
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.shape(),
}.isRequired;

export default MyProvider;
