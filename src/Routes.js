import React from 'react';
import { Switch, Route } from 'react-router';
import Recipes from './pages/Recipes';

function Routes() {
  return (
    <Switch>
      <Route path="/comidas" component={ Recipes } />
    </Switch>
  );
}

export default Routes;
