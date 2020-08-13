import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ImageBackground } from './styles';

import successBackground from '../../assets/images/success-background.svg';
import successIcon from '../../assets/images/icons/success-check-icon.svg';

interface Props {
  title: string;
  description: string;
  label: string;
  link: string;
  setHideScreen: (hide: boolean) => void;
}

const SuccessScreen: React.FC<Props> = ({
  title,
  description,
  label,
  link,
  setHideScreen,
}: Props) => {
  return (
    <Container>
      <ImageBackground src={successBackground} alt="Success" />
      <img src={successIcon} alt="Concluído" />
      <h1>{title}</h1>
      <p>{description}</p>
      <Link
        to={`/${link}`}
        style={{ cursor: 'pointer' }}
        onClick={() => setHideScreen(false)}
      >
        {label}
      </Link>
    </Container>
  );
};

export default SuccessScreen;
