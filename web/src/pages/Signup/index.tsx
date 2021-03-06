import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import {
  Container,
  Hero,
  ImageBackground,
  Form,
  Button,
  GoBack,
} from './styles';

import InputWithIcon from '../../components/InputWithIcon';
import InputWithoutLabel from '../../components/InputWithoutLabel';

import logo from '../../assets/images/logo.svg';
import background from '../../assets/images/background.svg';
import backIcon from '../../assets/images/icons/back.svg';
import SuccessScreen from '../../components/SuccessScreen';

const Signup: React.FC = () => {
  const { goBack } = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  const handleChageForm = (field: string, value: string | number) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    setShowSuccessScreen(true);
  };

  return (
    <Container>
      {showSuccessScreen && (
        <SuccessScreen
          title="Cadastro concluído"
          description="Agora você faz parte da plataforma da Proffy. Tenha uma ótima
          experiência."
          label="Fazer Login"
          link="signin"
          setHideScreen={setShowSuccessScreen}
        />
      )}
      <Form>
        <GoBack>
          <button type="button" onClick={goBack}>
            <img src={backIcon} alt="Voltar" />
          </button>
        </GoBack>
        <h1>Cadastro</h1>
        <p>Preencha os dados abaixo para começar.</p>
        <InputWithoutLabel
          name="name"
          label="Nome"
          handleChange={handleChageForm}
        />
        <InputWithoutLabel
          name="lastname"
          label="Sobrenome"
          handleChange={handleChageForm}
        />
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
        <Button type="submit" onClick={handleRegister}>
          Concluir cadastro
        </Button>
      </Form>
      <Hero>
        <ImageBackground src={background} alt="Background" />
        <div>
          <img src={logo} alt="Proffy" />
          <h3>Sua plataforma de esdutos online.</h3>
        </div>
      </Hero>
    </Container>
  );
};

export default Signup;
