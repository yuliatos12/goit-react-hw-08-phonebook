import { useSelector } from "react-redux";
import { getUserName } from "redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { LogOutStyled } from "components/AppBar/AppBar.styled";
export const UserMenu = () => {

    const name = useSelector(getUserName);
    const dispatch = useDispatch();

    const handleLogOut = () => dispatch(logOut());
    return (
        <>
            <div style={{
                display: 'flex',
            }}>
                <p style={{
                    fontWeight: '400',
                    color: '#fff',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
                    marginBottom: '10px',
                    display: 'block',
                    fontSize: '16px',
                    marginRight: '15px',
                }}>Welcome, {name}</p>
                
                <LogOutStyled onClick={handleLogOut}>Log Out</LogOutStyled>
            </div>
        </>
    );
}