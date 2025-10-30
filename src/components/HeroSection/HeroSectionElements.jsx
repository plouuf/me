import styled from 'styled-components';
import Astronaut from '../../assets/astronaut.svg';
import { Link as LinkS } from 'react-scroll';

export const HeroContainer = styled.section`
  display: flex;
  align-items: flex-start;
  margin: 0rem 10rem 4rem 10rem;
  position: relative;
  /* background-color: teal; */
  /* height: auto; */
  height: calc(100vh - (5rem + 5rem));

  @media screen and (max-width: 1024px) {
    margin: 0rem 2rem 3rem 2rem;
  }

  @media screen and (max-width: 768px) {
    margin: 0rem 1.5rem 3rem 1.5rem;
    height: auto;
    min-height: calc(100vh - 5rem);
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    margin: 0rem 1rem 2rem 1rem;
  }
`;

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-template-areas: 'col1 col2';
  width: 100%;
  margin-top: 2rem;
  /* background-color: blue; */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'col1'
      'col2';
    gap: 1.5rem;
    margin-top: 1rem;
    text-align: center;
  }
`;

export const Column1 = styled.div`
  display: flex;
  margin-bottom: 15px;
  /* padding: 0 15px; */
  grid-area: col1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
`;

export const Column2 = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 2rem;
  /* padding: 0 15px; */
  grid-area: col2;
  align-items: center;
  justify-content: center;
  /* background-color: purple; */
  width: 100%;
  height: 100%;
`;

export const HeroHeader = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  margin-top: 25vh;
  letter-spacing: 1.5px;
  font-family: monospace;
  position: relative;
  width: max-content;

  &:before,
  :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:before {
    background: #242424;
    animation: typewriter 1.5s steps(25) 0.4s forwards;
  }

  &:after {
    width: 0.125em;
    background: gray;
    animation: typewriter 1.5s steps(25) 0.4s forwards, blink 750ms steps(25) infinite;
  }

  @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      background: transparent;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 5vh;
    font-size: 1.8rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
`;

// export const HeroHeaderGlitchText = styled.span`
//   font-weight: 600;
//   font-size: 38px;
//   letter-spacing: 1.5px;
//   font-family: monospace;
//   text-shadow: 0.05em 0 0 rgba(255, 25, 25, 0.65),
//     -0.025em -0.05em 0 rgba(0, 242, 255, 0.65),
//     0.025em 0.05em 0 rgba(0, 255, 106, 0.65);

//   animation: glitch 1500ms infinite;

//   @keyframes glitch {
//     0% {
//       text-shadow: 0.05em 0 0 rgba(255, 25, 25, 0.65),
//         -0.05em -0.025em 0 rgba(0, 242, 255, 0.65),
//         -0.025em 0.05em 0 rgba(0, 255, 106, 0.65);
//     }
//     14% {
//       text-shadow: 0.05em 0 0 rgba(255, 25, 25, 0.65),
//         -0.05em -0.025em 0 rgba(0, 242, 255, 0.65),
//         -0.025em 0.05em 0 rgba(0, 255, 106, 0.65);
//     }
//     15% {
//       text-shadow: -0.05em -0.025 0 rgba(255, 25, 25, 0.65),
//         0.025em 0.025em 0 rgba(0, 242, 255, 0.65),
//         -0.05em -0.05em 0 rgba(0, 255, 106, 0.65);
//     }
//     49% {
//       text-shadow: -0.05em -0.025 0 rgba(255, 25, 25, 0.65),
//         0.025em 0.025em 0 rgba(0, 242, 255, 0.65),
//         -0.05em -0.05em 0 rgba(0, 255, 106, 0.65);
//     }
//     50% {
//       text-shadow: 0.025em 0.05em 0 rgba(255, 25, 25, 0.65),
//         0.05em 0 0 rgba(0, 242, 255, 0.65), 0 -0.05em 0 rgba(0, 255, 106, 0.65);
//     }
//     99% {
//       text-shadow: 0.025em 0.05em 0 rgba(255, 25, 25, 0.65),
//         0.05em 0 0 rgba(0, 242, 255, 0.65), 0 -0.05em 0 rgba(0, 255, 106, 0.65);
//     }
//     100% {
//       text-shadow: -0.025em 0 0 rgba(255, 25, 25, 0.65),
//         -0.025em -0.025em 0 rgba(0, 242, 255, 0.65),
//         -0.025em -0.05em 0 rgba(0, 255, 106, 0.65);
//     }
//   }
// `;

export const HeroText = styled.p`
  font-weight: 300;
  letter-spacing: 0.8px;
  margin-top: 1.25rem;
  font-size: 0.94rem;
  line-height: 1.5;
  font-weight: 300;
  /* background-color: yellow; */
  /* color: #aaa; */
  /* width: 100%; */
  max-width: 88%;
  opacity: 0;
  transform: translateY(2.5rem);
  animation: fadeInUp 0.5s ease 2.1s forwards;

  @keyframes fadeInUp {
    to {
      opacity: 55%;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const HeroImage = styled.div`
  background-image: url(${Astronaut});
  /* background-color: red; */
  background-size: cover;
  background-repeat: no-repeat;
  width: 510px;
  height: 460px;
  margin-top: 2.5vh;
  opacity: 0%;
  animation: fadeIn 0.4s ease-in forwards, bottom-to-top 5s ease-in-out infinite;

  @keyframes bottom-to-top {
    0% {
      transform: translateY(15%);
    }

    50% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(15%);
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 100%;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 400px;
    height: 360px;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 270px;
    margin: 0 auto;
    margin-top: 1rem;
  }

  @media screen and (max-width: 480px) {
    width: 250px;
    height: 225px;
  }
`;

export const HeroButton = styled(LinkS)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
  border-radius: 50px;
  margin: 2rem 0;
  font-size: 0.94rem;
  padding: 12px 28px;
  border: 1px solid #fff;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  opacity: 0;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #242424;
    background: #fff;
  }

  transform: translateY(2.5rem);
  animation: fadeInUp 0.5s ease 2.4s forwards;

  @keyframes fadeInUp {
    to {
      opacity: 80%;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    margin: 2rem auto;
  }

  @media screen and (max-width: 480px) {
    width: 9rem;
    font-size: 0.85rem;
    padding: 10px 20px;
  }
`;
