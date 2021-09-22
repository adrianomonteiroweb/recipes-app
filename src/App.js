import React from 'react';
import Routes from './Routes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Routes />
    </MyProvider>
  );
}

export default App;
