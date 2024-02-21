import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "redux/auth/operations";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { StyledButton, StyledForm, StyledInput } from "./Pages.styled";

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
    const handleChange = e => {
        const { name, value } = e.target;
        switch(name) {
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
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signUp({name, email, password}));

        if(name === '' || email === '' || password === '') {
            return Notify.warning('Please fill in all the fields!');
        }
        reset();
    }

    const reset = () => {
        setEmail('');
        setPassword('');
        setName('');
    };
const nameInputId = nanoid();
 const emailInputId = nanoid();
  const passInputId = nanoid();

return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
        <label tmlFor={nameInputId} style={{
            fontWeight: '400',
            color:'#fff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
            marginBottom: '10px',
            display: 'block',
            fontSize: '16px',
          }}>
            Name:
            </label>
            <StyledInput id={nameInputId} type="text" name="name" value={name} onChange={handleChange}/>
        
        <label htmlFor={emailInputId} style={{
            fontWeight: '400',
            color:'#fff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
            marginBottom: '10px',
            display: 'block',
            fontSize: '16px',
          }}>
            Email:
            </label>
            <StyledInput id={emailInputId} type="email" name="email" value={email} onChange={handleChange}/>
        
        <label tmlFor={passInputId} style={{
            fontWeight: '400',
            color:'#fff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
            marginBottom: '10px',
            display: 'block',
            fontSize: '16px',
          }}>
           Password:
           </label>
            <StyledInput id={passInputId} type="password" name="password" value={password} onChange={handleChange}/>
        
        <StyledButton type="submit">Sign Up</StyledButton>

    </StyledForm>
   
)

}

export default SignUp;