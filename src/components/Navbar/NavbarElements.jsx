import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { Button } from 'antd';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 0.5rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ isScroll }) =>
    isScroll ? 'rgba(36,36,36,0.75)' : 'rgba(36,36,36,0.15)'};
  backdrop-filter: blur(25px);
  /* background-color: #242424; */
  transition: 0.8s all ease-in;

  @media screen and (max-width: 1024px) {
    padding: 0.5rem 2rem;
  }
`;

export const NavLogoLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 100%;
  font-weight: 600;
  font-size: 1.8rem;
  letter-spacing: 0.8px;
  cursor: pointer;
`;

export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  opacity: 55%;
  align-items: center;
  text-decoration: none;
  padding: 0;
  margin: 0 1.5rem;
  height: 100%;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: 0.1s ease;
  font-size: 0.94rem;

  &.active {
    color: #fff;
    opacity: 100%;
  }

  &:hover {
    color: #fff;
    opacity: 100%;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavSocialButton = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  margin-left: 1.3rem;
`;

export const RoundNavLink = styled.a`
  text-decoration: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #242424;
  border: 1.5px solid #fff;
  margin: 0.25rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1rem;
  opacity: 55%;
  cursor: pointer;

  &:hover {
    color: #fff;
    opacity: 100%;
  }
`;

export const NavButton = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavButtonLink = styled.p`
  background: #242424;
  border-radius: 50px;
  padding: 12px 28px;
  border: 1px solid #fff;
  text-decoration: none;
  color: #fff;
  opacity: 75%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.85rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #242424;
    background: #fff;
    opacity: 100%;
  }
`;

export const DrawerSubmit = styled(Button)`
  display: flex;
  align-items: center;
  background: #242424;
  height: 3rem;
  border-radius: 50px;
  padding: 12px 28px;
  border: 1px solid #fff;
  text-decoration: none;
  color: #fff;
  opacity: 75%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.85rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #242424;
    background: #fff;
    opacity: 100%;
  }
`;
