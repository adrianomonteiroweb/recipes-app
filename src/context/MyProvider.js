import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';

function MyProvider({ children }) {
  const [login, setLogin] = useState({
    email: '',
    senha: '',
    statusLogin: true,
  });
  return (
    <MyContext.Provider value={ { login, setLogin } }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.shape(),
}.isRequired;

export default MyProvider;
