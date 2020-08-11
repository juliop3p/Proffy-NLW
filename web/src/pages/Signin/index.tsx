import React from 'react';

import InputWithoutLabel from '../../components/InputWithoutLabel';

import logo from '../../assets/images/logo.svg';
import background from '../../assets/images/background.svg';
import checkedIcon from '../../assets/images/icons/checked.svg';
import heart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Signin: React.FC = () => {
  return (
    <div id="signin" className="container-signin">
      <div className="hero">
        <img src={background} alt="Background" className="bg-image" />
        <div>
          <img src={logo} alt="Proffy" />
          <h3 className="hero-title">Sua plataforma de esdutos online.</h3>
        </div>
      </div>
      <form className="form">
        <h1>Fazer login</h1>
        <InputWithoutLabel
          name="email"
          label="E-mail"
          handleChange={() => {}}
        />
        <InputWithoutLabel
          name="password"
          label="Senha"
          handleChange={() => {}}
        />
        <div className="login-defaults">
          <div className="remember-me">
            <div className="checkbox">
              <input type="checkbox" />
              <img src={checkedIcon} alt="checked" />
            </div>
            <span className="login-defaults-text">Lembrar-me</span>
          </div>
          <span className="login-defaults-text">Esqueci minha senha</span>
        </div>
        <button type="submit">Entrar</button>
        <div className="link-container">
          <p>
            Não tem conta? <br />
            <a href="/nah">Cadastre-se</a>
          </p>
          <span>
            É de graça
            <img src={heart} alt="Heart" />
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signin;
