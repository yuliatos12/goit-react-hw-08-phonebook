import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
`;
export const HeaderContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderBar = styled.header`
  backdrop-filter: blur(74px);
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  margin-left: 20px;

  &.active {
    color: orange;
  }
`;

export const AuthLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  border-radius: 5rem;
  padding: 1rem 2rem;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    background-color: orange;
    border: 1px solid orange;
  }

  &.active {
    background-color: orange;
    border: 1px solid orange;
  }
`;
export const LogOutStyled = styled.button`
  color: white;
  text-decoration: none;
  border-radius: 5rem;
  padding: 1rem 2rem;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    background-color: orange;
    border: 1px solid orange;
  }
`;
export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;
