import React from 'react';
import { Switch, Route } from 'react-router';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import Beverages from './pages/Beverages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/comidas" component={ Recipes } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/bebidas" component={ Beverages } />
    </Switch>
  );
}

export default Routes;
