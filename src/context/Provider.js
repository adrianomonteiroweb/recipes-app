import React, { useState } from 'react';
import PropTypes from 'prop-types';
import recipesContext from './recipesContext';

const Provider = ({ children }) => {
  const [endpoint, setEndpoint] = useState('');
  const [query, setQuery] = useState('');

  const contextValue = {
    searchBar: {
      endpoint,
      setEndpoint,
      query,
      setQuery,
    },
  };

  return (
    <recipesContext.Provider value={ contextValue }>
      {children}
    </recipesContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
