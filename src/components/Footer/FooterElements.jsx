import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';

export const FooterContainer = styled.footer`
  background-color: #1e1e1e;
`;

export const FooterWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 32px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 24px 16px;
  }
`;

export const FooterLogo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 100%;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.8px;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const FooterAuthor = styled.p`
  color: '#fff';
  align-items: center;
  display: flex;
  word-break: nowrap;
  word-spacing: 0.1rem;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const BeatingHeart = styled(AiFillHeart)`
  color: #ff355e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.4rem;

  animation: heartBeat 1.5s infinite;

  &:hover {
  }

  @keyframes heartBeat {
    from {
      transform: scale(1);
    }
    14% {
      transform: scale(1.3);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.3);
    }
    70% {
      transform: scale(1);
    }
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  font-size: 0.75rem;
`;
