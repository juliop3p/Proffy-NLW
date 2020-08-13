import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Container, TopBarContainer, TopBar, Content } from './styles';

interface Props {
  title: string;
  description?: string;
  children?: ReactNode;
  pageName?: string;
}

const PageHeader: React.FC<Props> = ({
  children,
  title,
  pageName,
  description,
}: Props) => {
  return (
    <Container className="page-header">
      <TopBarContainer>
        <TopBar className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <h3>{pageName}</h3>
          <img src={logo} alt="Proffy" />
        </TopBar>
      </TopBarContainer>

      <Content className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </Content>
    </Container>
  );
};

export default PageHeader;
