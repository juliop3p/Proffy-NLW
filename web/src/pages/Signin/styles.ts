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

export const Form = styled.form`
  width: 90%;
  margin: 6rem auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    color: var(--color-text-title);
    font-size: 3.6rem;
    margin-bottom: 2.4rem;
  }

  @media (min-width: 1000px) {
    width: 50%;
  }

  @media (min-width: 700px) {
    width: 60%;
  }
`;

export const FormOptions = styled.div`
  margin: 3.2rem 0 4.8rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div span {
    margin-left: 1.6rem;
    cursor: auto;
  }

  span {
    cursor: pointer;
  }
`;

export const CheckboxGreen = styled.div`
  position: relative;
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 0.8rem;
  background-color: var(--color-secundary);
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    opacity: 0;
    cursor: pointer;
    position: absolute;
  }

  input:checked + img {
    display: block;
  }

  img {
    display: none;
  }
`;

export const Button = styled.button<{ filledIn: boolean }>`
  height: 5.6rem;
  background-color: ${props =>
    props.filledIn ? 'var(--color-secundary)' : '#dcdce5'};
  border: none;
  border-radius: 0.8rem;
  color: ${props =>
    props.filledIn
      ? 'var(--color-title-in-primary)'
      : 'var(--color-text-complement)'};
  font: 600 1.6rem 'Archivo';
  cursor: ${props => props.filledIn && 'pointer'};
`;

export const FormAdditional = styled.div`
  margin: 4rem 0 0;
  display: flex;
  justify-content: space-between;
  background: none;

  a {
    color: var(--color-primary);
    font-weight: 600;
  }

  img {
    margin-left: 0.8rem;
  }

  span {
    opacity: 0.8;
  }

  @media (min-width: 1400px) {
    margin: 16rem 0 0;
  }
`;
