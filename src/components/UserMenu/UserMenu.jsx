import { useDispatch } from "react-redux";
import { postLogOutThunk } from "services/fetchAuth";
import { Button, Toolbar } from "@mui/material";

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <Toolbar sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}>
      
      <Button variant="text" color='inherit' type="button" 
              onClick={() => dispatch(postLogOutThunk())}
              sx={{ color: '#011f4b' }}
          >
        Log Out
      </Button>
    </Toolbar>
  );
};