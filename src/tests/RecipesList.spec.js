import React from 'react';
// import { screen } from '@testing-library/dom';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
// import dataMeals from './mocks/mealRecipes';

describe('recipes list page', () => {
  it('should render recipes', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
  });
});
