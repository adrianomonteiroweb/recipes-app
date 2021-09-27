import React from 'react';
import { Switch, Route } from 'react-router';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import Beverages from './pages/Beverages';
import Login from './pages/Login';
import Details from './pages/Details';
import Explore from './pages/Explore';
import DetailsBeverages from './pages/DetailsBeverages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/comidas" component={ Recipes } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/bebidas" component={ Beverages } />
      <Route exact path="/" component={ Login } />
      <Route
        exact
        path="/comidas/:id"
        render={ (props) => <Details { ...props } /> }
      />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/bebidas/:id" component={ DetailsBeverages } />
    </Switch>
  );
}

export default Routes;
