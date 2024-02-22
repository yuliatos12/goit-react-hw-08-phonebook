import { NavLink } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/selectors";
import { AuthLinkStyled } from "components/AppBar/AppBar.styled";

const HomePage = () => {

  const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <div 
        style={{
            paddingTop: "50px",
            textAlign: "center",
          }}>
            <FaBookOpenReader style={{
        
        color: "white",
        width: "120px",
    height: "120px",
      }}/>
           <h1 
           style={{
            color: "white",
            fontSize: "60px",
            marginBottom: 0,
            marginTop: 0

          }}>
            Welcome To Your Phonebook</h1>
           <p style={{
            color: "lightgrey",
            marginTop: "5px",
          }}>All your contacts in one place</p>
          {!isLoggedIn && <AuthLinkStyled style={{marginTop: '16px', display: 'inline-block'}} to='/login'>Log In</AuthLinkStyled>}
        </div>
    )
}

export default HomePage;