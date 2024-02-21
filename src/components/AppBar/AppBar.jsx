import { AuthNav } from "./AuthNav";
import { Navigation } from "./Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/selectors";
import { HeaderBar, Container, HeaderContainer } from "./AppBar.styled";


export const AppBar = () => {

    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
<HeaderBar>
    <HeaderContainer>
    
    <Navigation/> 
    {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </HeaderContainer>
    
</HeaderBar>
    );
}