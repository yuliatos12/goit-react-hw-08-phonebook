import { AppBar, Toolbar } from "@mui/material";
import { Navigation } from "components/Navigation/Navigation";
import { AuthNav } from "components/Navigation/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";


export const Bar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
      <AppBar style={{ backgroundColor: '#e3e4e6' }}>
      <Toolbar sx={{display: 'flex', fontSize: 18, justifyContent: 'space-between'}}>
        
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      
      </Toolbar>
    </AppBar>
  );
};