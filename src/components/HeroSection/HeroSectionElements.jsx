import styled from 'styled-components';
import Astronaut from '../../assets/astronaut.svg';
import { Link as LinkS } from 'react-scroll';

export const HeroContainer = styled.section`
  display: flex;
  align-items: flex-start;
  margin: 2rem 10rem;
  position: relative;
  /* background-color: teal; */
  height: calc(100vh - (3rem + 5rem));
`;

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-template-areas: 'col1 col2';
  width: 100%;
  margin-top: 2rem;
  /* background-color: blue; */
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
  font-size: 36px;
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
    animation: typewriter 1.5s steps(25) 0.4s forwards,
      blink 750ms steps(25) infinite;
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
  font-size: 16px;
  line-height: 32px;
  /* background-color: yellow; */
  width: 100%;
  opacity: 0;
  transform: translateY(2.5rem);
  animation: fadeInUp 0.5s ease 2.1s forwards;

  @keyframes fadeInUp {
    to {
      opacity: 75%;
      transform: translateY(0);
    }
  }
`;

export const HeroImage = styled.div`
  background-image: url(${Astronaut});
  /* background-color: red; */
  background-size: cover;
  background-repeat: no-repeat;
  width: 510px;
  height: 460px;
  margin-top: 6vh;
  opacity: 0%;
  animation: fadeIn 0.4s ease-in forwards, bottom-to-top 4s ease-in-out infinite;

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
`;

export const HeroButton = styled(LinkS)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 12rem;
  border-radius: 50px;
  margin: 2rem 0;
  padding: 12px 24px;
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
      opacity: 100%;
      transform: translateY(0);
    }
  }
`;
