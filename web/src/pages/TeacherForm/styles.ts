import styled from 'styled-components';

export const PhoneInputContainer = styled.div`
  margin: 1.4rem 0;

  span {
    font-size: 1.4rem;
    margin-bottom: 2.8rem;
    color: var(--color-text-complement);
  }
`;

export const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 1.6rem;
  }

  div {
    align-self: stretch;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 80px 1fr 1fr;
    grid-gap: 1.6rem;
    margin-bottom: 2.4rem;
  }
`;
