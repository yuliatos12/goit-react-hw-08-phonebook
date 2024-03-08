import { AuthLinkStyled } from "./AppBar.styled";

export const AuthNav = () => {
    return (
        <div style={{
            display: 'flex',
            gap: '15px'
        }}>

            <AuthLinkStyled to='/register'>Sign Up</AuthLinkStyled>

        </div>
    );
}