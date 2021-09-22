import React from 'react';
import { Switch, Route } from 'react-router';
import Recipes from './pages/Recipes';
import Profile from './pages/Perfil';

function Routes() {
  return (
    <Switch>
      <Route exact path="/comidas" component={ Recipes } />
      <Route exact path="/perfil" component={ Profile } />
    </Switch>
  );
}

export default Routes;
