import * as React from 'react';
import { Typography, Box} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { boxMainStyled } from './PagesStyled';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Filter } from "components/ContactSearchFilter/ContactSearchFilter";
import { ContactsList } from "components/ContactList/ContactList";

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    
      <Box sx={{ ...boxMainStyled, textAlign: 'center' }}>
        {isLoggedIn ? (<><Typography component="h1" variant="h3" color="inherit" sx={{  color: '#011f4b' }}>
          Your contacts are here!</Typography>
          <Filter />
                <ContactsList />
        </>) :
          (<><Typography variant="h3" component="h1"  color="#011f4b" textAlign={'center'}>
            Safe place for all your contacts </Typography>
            <MenuBookIcon
              sx={{
                display: { xs: 'none', md: 'flex' },
                margin: '0 auto',
                color: '#011f4b',
                fontSize: '8rem'

              }}
            />
            </>)}
      </Box>
  );
};