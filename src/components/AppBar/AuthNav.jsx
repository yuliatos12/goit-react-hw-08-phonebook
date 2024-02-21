import { NavLink } from "react-router-dom";
import { AuthLinkStyled, Container } from "./AppBar.styled";

export const AuthNav = () => {
    return (
<div style={{display: 'flex',
gap: '15px'}}>
            
            <AuthLinkStyled to='/login'>Sign In</AuthLinkStyled>
            <AuthLinkStyled to='/register'>Sign Up</AuthLinkStyled>
            
</div>
    );
}