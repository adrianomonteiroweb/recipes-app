import React, { useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';

function Login() {
  const { login, setLogin } = useContext(MyContext);
  const { statusLogin } = login;
  function handleChange() {
    const { email, senha } = login;
    const regexEmail = /\S+@\S+\.\S+/;
    const regexSenha = /^.{6,}$/;
    if ((regexEmail.test(email)) && (regexSenha.test(senha))) {
      setLogin({ ...login, statusLogin: false });
    }
  }

  function handleClick() {
    const { email } = login;
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
  }

  return (
    <section className="sectionCss">
      <h1 className="h1Css">Login</h1>
      <form onChange={ handleChange } className="formCss">
        {/* <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ ({ target: { value } }) => setLogin({ ...login, email: value }) }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ ({ target: { value } }) => setLogin({ ...login, senha: value }) }
        /> */}

        <div className="form-floating mb-3">
          <input
            data-testid="email-input"
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Email"
            onChange={ ({ target: { value } }) => setLogin({ ...login, email: value }) }
          />
        </div>

        <div className="form-floating">
          <input
            data-testid="password-input"
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Senha"
            onChange={ ({ target: { value } }) => setLogin({ ...login, senha: value }) }
          />
        </div>

      </form>
      <Link
        to="/comidas"
        onClick={ handleClick }
      >
        <button
          id="btnCss"
          type="button"
          data-testid="login-submit-btn"
          disabled={ statusLogin }
        >
          Entrar
        </button>
      </Link>
    </section>
  );
}

export default Login;
