import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const HeroContainer = styled.div`
  color: var(--color-text-in-primary);
  background: var(--color-primary);
  padding: 1.6rem;
`;

export const Hero = styled.div`
  width: 90vw;
  max-width: 1100px;
  margin: auto;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  div span {
    margin-left: 1.6rem;
  }

  svg {
    color: var(--color-text-in-primary);
  }
`;

export const PowerButton = styled.button`
  border: none;
  width: 4rem;
  height: 4rem;
  background: var(--color-primary-dark);
  border-radius: 0.8rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  margin-bottom: 3.2rem;

  h2 {
    font-weight: 500;
    font-size: 3.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
  text-align: center;

  img {
    height: 10rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;

    img {
      height: 100%;
    }

    h2 {
      width: 40rem;
      text-align: initial;
      font-size: 3.6rem;
    }
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }

  @media (min-width: 1100px) {
    flex-direction: row;

    img {
      width: 60%;
    }
  }
`;

export const Footer = styled.footer`
  width: 90vw;
  max-width: 1100px;
  margin: 6.4rem auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.2rem;
  }

  div p {
    width: 60%;
  }

  div span {
    justify-self: flex-end;
    text-align: right;
    width: fit-content;
  }

  div span img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ButtonsContainer = styled.div`
  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    padding: 0.8rem;
    margin-right: 1.6rem;
    font: 700 2rem 'Archivo';

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;
  }

  a img {
    margin-right: 2.4rem;
  }

  a:nth-child(1) {
    background: var(--color-primary-lighter);
  }

  a:nth-child(2) {
    background: var(--color-secundary);
  }

  a:nth-child(1):hover {
    background: var(--color-primary-light);
  }

  a:nth-child(2):hover {
    background: var(--color-secundary-dark);
  }
`;
