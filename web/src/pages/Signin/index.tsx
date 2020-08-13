import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import InputWithoutLabel from '../../components/InputWithoutLabel';
import InputWithIcon from '../../components/InputWithIcon';

import {
  Container,
  Hero,
  ImageBackground,
  Form,
  FormOptions,
  CheckboxGreen,
  Button,
  FormAdditional,
} from './styles';

import logo from '../../assets/images/logo.svg';
import background from '../../assets/images/background.svg';
import checkedIcon from '../../assets/images/icons/checked.svg';
import heart from '../../assets/images/icons/purple-heart.svg';

const Signin: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const [isFormFilledIn, setIsFormFilledIn] = useState(false);

  const handleChageForm = (field: string, value: string | number) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    const { email, password } = formData;

    if (email.length > 0 && password.length > 0) {
      setIsFormFilledIn(true);
    } else {
      setIsFormFilledIn(false);
    }
  };

  return (
    <Container>
      <Hero>
        <ImageBackground src={background} alt="Background" />
        <div>
          <img src={logo} alt="Proffy" />
          <h3>Sua plataforma de esdutos online.</h3>
        </div>
      </Hero>
      <Form>
        <h1>Fazer login</h1>
        <InputWithoutLabel
          name="email"
          label="E-mail"
          handleChange={handleChageForm}
        />
        <InputWithIcon
          icon={
            showPassword ? (
              <IoMdEyeOff size={25} onClick={() => setShowPassword(false)} />
            ) : (
              <IoMdEye size={25} onClick={() => setShowPassword(true)} />
            )
          }
          name="password"
          label="Senha"
          type={showPassword ? 'text' : 'password'}
          handleChange={handleChageForm}
        />
        <FormOptions>
          <div>
            <CheckboxGreen>
              <input type="checkbox" />
              <img src={checkedIcon} alt="checked" />
            </CheckboxGreen>
            <span>Lembrar-me</span>
          </div>
          <Link to="/forgot-password">Esqueci minha senha</Link>
        </FormOptions>
        <Button type="submit" filledIn={isFormFilledIn}>
          Entrar
        </Button>
        <FormAdditional>
          <p>
            Não tem conta? <br />
            <Link to="/signup">Cadastre-se</Link>
          </p>
          <span>
            É de graça
            <img src={heart} alt="Heart" />
          </span>
        </FormAdditional>
      </Form>
    </Container>
  );
};

export default Signin;
