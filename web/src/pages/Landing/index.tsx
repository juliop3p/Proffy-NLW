import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdPower } from 'react-icons/io';

import {
  Container,
  HeroContainer,
  Hero,
  User,
  PowerButton,
  Images,
  Logo,
  Footer,
  ButtonsContainer,
} from './styles';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState<number>(0);

  useEffect(() => {
    const loadTotalConnections = async () => {
      const { data } = await api.get<{ total: number }>('connections');

      setTotalConnections(data.total);
    };
    loadTotalConnections();
  }, []);

  return (
    <Container>
      <HeroContainer>
        <Hero>
          <User>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/52512483?s=400&u=2aac534a0f02106801ab4179f3bf2934b8142944&v=4"
                alt="Julio Cesar"
              />
              <span>Julio Cesar</span>
            </div>
            <PowerButton>
              <IoMdPower size={20} />
            </PowerButton>
          </User>
          <Images>
            <Logo>
              <img src={logo} alt="Proffy" />
              <h2>Sua plataforma de estudos online.</h2>
            </Logo>
            <img src={landing} alt="Plataforma de estudos" />
          </Images>
        </Hero>
      </HeroContainer>
      <Footer>
        <div>
          <p>
            Seja bem-vindo.
            <br />
            <strong>O que deseja fazer?</strong>
          </p>
          <span className="total-connections">
            Total de {totalConnections} conexões já realizadas
            <img src={purpleHeartIcon} alt="Coração roxo" />
          </span>
        </div>
        <ButtonsContainer className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default Landing;
