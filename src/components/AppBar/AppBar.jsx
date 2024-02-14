import { AuthNav } from "./AuthNav";
import { Navigation } from "./Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/selectors";

export const AppBar = () => {

    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
<header>
     <Navigation/> 
    {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    
    

</header>
    );
}