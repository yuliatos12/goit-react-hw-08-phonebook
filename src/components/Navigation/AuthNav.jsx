import { Toolbar } from "@mui/material";
import { StyledNavLink, toolbarStyle } from "components/Navigation/NavigationStyled";

export const AuthNav = () => {
  return (
    <Toolbar sx={toolbarStyle}>
     
      <StyledNavLink to="/login">Log In</StyledNavLink>
        <StyledNavLink to="/register">Sign Up</StyledNavLink>
    </Toolbar>
  );
};