import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1000px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Form = styled.form`
  height: 95vh;
  width: 90%;
  margin: 2rem auto;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: var(--color-text-title);
    font-size: 3.6rem;
    margin-bottom: 1.6rem;
  }

  p {
    width: 23.2rem;
    margin-bottom: 2.4rem;
  }

  @media (min-width: 1000px) {
    width: 50%;
    height: 90vh;
  }

  @media (min-width: 700px) {
    width: 60%;
  }
`;

export const GoBack = styled.div`
  img {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    padding-top: 0.8rem;
  }
`;

export const Button = styled.button`
  height: 5.6rem;
  margin-top: 4.8rem;
  background-color: var(--color-secundary);
  border: none;
  border-radius: 0.8rem;
  color: var(--color-title-in-primary);
  font: 600 1.6rem 'Archivo';
  cursor: pointer;
`;

export const Hero = styled.div`
  background-color: var(--color-primary);
  padding: 3.6rem;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: none;

  div h3 {
    width: 300px;
    color: var(--color-text-in-primary);
    font: 500 2.6rem 'Poppins';
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageBackground = styled.img`
  position: absolute;
  height: 90vh;
`;
