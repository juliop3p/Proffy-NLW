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

import InputWithoutLabel from '../../components/InputWithoutLabel';

import logo from '../../assets/images/logo.svg';
import background from '../../assets/images/background.svg';
import backIcon from '../../assets/images/icons/back.svg';
import SuccessScreen from '../../components/SuccessScreen';

const ForgotPassword: React.FC = () => {
  const { goBack } = useHistory();

  const [email, setEmail] = useState('');
  const [isFormFilledIn, setIsFormFilledIn] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  const handleChageForm = (field: string, value: string | number) => {
    setEmail('nha');

    if (email.length > 0) {
      setIsFormFilledIn(true);
    } else {
      setIsFormFilledIn(false);
    }
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
          name="email"
          label="E-mail"
          handleChange={handleChageForm}
        />
        <Button
          type="submit"
          filledIn={isFormFilledIn}
          onClick={handleRegister}
        >
          Enviar
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

export default ForgotPassword;
