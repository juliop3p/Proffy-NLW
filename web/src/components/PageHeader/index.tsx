import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface Props {
  title: string;
  description?: string;
  children?: ReactNode;
}

const PageHeader: React.FC<Props> = ({
  children,
  title,
  description,
}: Props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logo} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
