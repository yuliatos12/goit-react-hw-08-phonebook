import * as React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogInThunk } from "services/fetchAuth";
import { Button, CssBaseline, TextField, Box, Container, Typography } from '@mui/material';
import { boxFormStyled } from './PagesStyled';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
            
      default:
        break;
    }
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    const logInUser = { email, password };
    dispatch(postLogInThunk(logInUser));
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={boxFormStyled}>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" onSubmit={handleLogIn} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              type="email"
              label="Email"
              name="email"
              autoComplete="email"
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={password}
              autoComplete="current-password"
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2, 
                backgroundColor: '#6497b1',
                '&:hover': {
                  backgroundColor: '#011f4b'
                }
             }}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Container>
  );
};