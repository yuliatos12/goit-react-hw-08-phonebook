import * as React from 'react';
import {  Button, Container, Typography, CssBaseline, TextField, Box } from '@mui/material';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUserThunk } from "services/fetchAuth";
import { boxFormStyled } from './PagesStyled';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
            
      default:
        break;
    }
  }

  const onSubmitUser = (event) => {
    event.preventDefault();
    const newUser = { name, email, password };
    dispatch(postUserThunk(newUser));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={boxFormStyled}>
          
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={onSubmitUser} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            inputProps={{ inputMode: 'text', pattern: "^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" }}
            autoComplete="name"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            fullWidth
            label="Name"
            onChange={onInputChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            type="email"
            name="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            value={email}
            autoComplete="email"
            onChange={onInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            name="password"
            value={password}
            label="Password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            id="password"
            autoComplete="new-password"
            onChange={onInputChange}
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
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};