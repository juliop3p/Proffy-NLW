import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  position: fixed;
  top: 0;
  background: var(--color-primary);
  width: 100%;
  height: 100vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 3.6rem;
  }

  h1 {
    color: var(--color-title-in-primary);
    margin-bottom: 1.6rem;
  }

  p {
    color: var(--color-text-in-primary);
    text-align: center;
    max-width: 50rem;
    margin-bottom: 7.2rem;
  }

  a {
    background: var(--color-secundary);
    border-radius: 0.8rem;
    text-decoration: none;
    font: 600 1.6rem 'Archivo';
    height: 5.6rem;
    width: 16rem;
    color: var(--color-title-in-primary);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageBackground = styled.img`
  position: absolute;
  height: 80vh;
  width: 100%;
  z-index: -1;
`;
