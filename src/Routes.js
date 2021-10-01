import React from 'react';
import { Switch, Route } from 'react-router';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import Beverages from './pages/Beverages';
import Login from './pages/Login';
import Details from './pages/Details';
import Explore from './pages/Explore';
import RecipeInProgress from './pages/RecipeInProgress';
import ExploreByType from './pages/ExploreByType';
import RecipesMade from './pages/RecipesMade';
import ExploreByIngredients from './pages/ExploreByIngredients';
import ExploreByArea from './pages/ExploreByArea';
import NotFound from './pages/NotFound';
import RecipesFav from './pages/RecipesFav';

function Routes() {
  return (
    <Switch>
      <Route exact path="/comidas" component={ Recipes } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/bebidas" component={ Beverages } />
      <Route exact path="/" component={ Login } />
      <Route exact path="/explorar/:type" component={ ExploreByType } />
      <Route
        exact
        path="/explorar/:type/ingredientes"
        component={ ExploreByIngredients }
      />
      <Route exact path="/explorar/comidas/area" component={ ExploreByArea } />
      <Route
        exact
        path="/:type/:id"
        render={ (props) => <Details { ...props } /> }
      />
      <Route
        exact
        path="/:type/:id/in-progress"
        render={ (props) => <RecipeInProgress { ...props } /> }
      />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/receitas-feitas" component={ RecipesMade } />
      <Route exact path="/receitas-favoritas" component={ RecipesFav } />
      <Route path="*" exact component={ NotFound } />
    </Switch>
  );
}

export default Routes;
