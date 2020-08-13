import styled from 'styled-components';

export const Input = styled.div`
  display: flex;
  align-items: center;
  height: 7.2rem;
  background: var(--color-box-footer);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  position: relative;

  input {
    width: 90%;
    border: none;
    margin-top: -0.08rem;
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem 'Poppins';
    background: var(--color-box-footer);
  }

  svg {
    cursor: pointer;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  svg:hover {
    opacity: 0.9;
  }

  &:focus-within::after {
    width: 3px;
    height: calc(100% - 3.2rem);
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 0;
    top: 1.6rem;
    bottom: 1.56rem;
  }

  @media (min-width: 1000px) {
    height: 5.6rem;
  }

  @media (min-width: 1400px) {
    height: 7.2rem;
  }
`;
