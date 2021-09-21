import React, { useContext } from 'react';
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

  function handleSubmit() {

  }

  return (
    <section>
      <h1>Login</h1>
      <form onChange={ handleChange }>
        <input
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
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          onSubmit={ handleSubmit }
          disabled={ statusLogin }
        >
          Entrar
        </button>
      </form>
    </section>
  );
}

export default Login;
