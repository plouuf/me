import styled from 'styled-components';

export const ProjectContainer = styled.section`
  /* display: flex; */
  /* align-items: flex-start; */
  margin: 6rem 10rem;
  position: relative;
  /* background-color: teal; */
  /* height: calc(100vh - (3rem + 5rem)); */
  height: auto;

  @media screen and (max-width: 1024px) {
    margin: 4rem 2rem;
  }

  @media screen and (max-width: 768px) {
    margin: 4rem 1.5rem;
  }

  @media screen and (max-width: 480px) {
    margin: 3rem 1rem;
  }
`;
