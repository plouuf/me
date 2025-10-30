import styled from 'styled-components';

export const ContactImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;

  @media screen and (max-width: 768px) {
    height: 30vh;
  }

  @media screen and (max-width: 480px) {
    height: 25vh;
  }
`;

export const ContactImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0 5rem 0;
  width: 75%;

  @media screen and (max-width: 768px) {
    width: 60%;
    margin: 2rem 0 3rem 0;
  }

  @media screen and (max-width: 480px) {
    width: 50%;
    margin: 1.5rem 0 2rem 0;
  }
`;
