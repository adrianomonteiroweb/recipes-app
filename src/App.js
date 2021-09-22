import React from 'react';
import { Route } from 'react-router';
import Routes from './Routes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Routes />
      <Route path="/" component={ Login } />
    </MyProvider>
  );
}

export default App;
