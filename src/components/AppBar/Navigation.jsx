import { NavLink } from "react-router-dom";
import { NavigationContainer, StyledLink } from "./AppBar.styled";
import { FaBookOpenReader } from "react-icons/fa6";

export const Navigation = () => {
    return (
<NavigationContainer>
<FaBookOpenReader style={{
        
        color: "white",
        width: "25px",
    height: "25px",
      }}/>
<StyledLink to="/">Home</StyledLink>
<StyledLink to='/contacts'>Contacts</StyledLink>
</NavigationContainer>
    );
}