import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 0.5rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ isScroll }) => (isScroll ? '#242424' : 'transparent')};
  /* background-color: #242424; */
  transition: 1s all ease-in;
`;

export const NavLogoLink = styled(Link)`
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

export const NavLink = styled(Link)`
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

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavButtonLink = styled.div`
  background: #242424;
  border-radius: 50px;
  padding: 12px 28px;
  border: 1px solid #fff;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #242424;
    background: #fff;
  }
`;
