import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const StyledNavLink = styled(NavLink)`\
  text-decoration: none;
  color: #011f4b;
  &:hover {
    color: #6497b1; 
  }
  &.active {
    color: 	#6497b1;
  }
`;

export const toolbarStyle = {
    display: 'flex',
    columnGap: 3,
};