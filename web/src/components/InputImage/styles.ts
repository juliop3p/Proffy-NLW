import styled from 'styled-components';

export const ImageInput = styled.div<{ hasImage: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  label {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #333;
  }

  input {
    display: none;
  }

  img {
    display: ${props => (props.hasImage ? 'block' : 'none')};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
