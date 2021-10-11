import React from 'react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

const EMAIL = 'test@test.com';
const PASSWORD = '1234567';

describe('Login page tests', () => {
  it('should exist email and password inputs', () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    expect(emailInput).toHaveValue('');
    expect(passwordInput).toHaveValue('');
  });

  it('login button should be disabled', () => {
    renderWithRouter(<App />);

    const loginBtn = screen.getByTestId('login-submit-btn');
    expect(loginBtn.disabled).toBe(true);
  });

  it('login button should enabled and redirect to "/comidas"', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginBtn = screen.getByTestId('login-submit-btn');

    userEvent.type(emailInput, EMAIL);
    userEvent.type(passwordInput, PASSWORD);

    expect(loginBtn.disabled).toBe(false);

    userEvent.click(loginBtn);
    expect(history.location.pathname).toBe('/comidas');
  });
});
