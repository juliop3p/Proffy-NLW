import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

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

  const [formData, setFormData] = useState({ email: '' });
  const [isFormFilledIn, setIsFormFilledIn] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  const handleChageForm = (field: string, value: string | number) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    const { email } = formData;

    if (email.length > 0) {
      setIsFormFilledIn(true);
    } else {
      setIsFormFilledIn(false);
    }
  };

  const handleForgotPassword = (event: FormEvent) => {
    event.preventDefault();
    setShowSuccessScreen(true);
  };

  return (
    <Container>
      {showSuccessScreen && (
        <SuccessScreen
          title="Redefinição enviada!"
          description="Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos."
          label="Voltar ao login"
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
        <h1>Eita, esqueceu sua senha?</h1>
        <p>Não esquenta, vamos dar um geito nisso.</p>
        <InputWithoutLabel
          name="email"
          label="E-mail"
          handleChange={handleChageForm}
        />
        <Button
          type="submit"
          filledIn={isFormFilledIn}
          onClick={handleForgotPassword}
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
