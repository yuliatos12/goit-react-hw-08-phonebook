import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "redux/auth/operations";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { StyledButton, StyledForm, StyledInput } from "./Pages.styled";
import { nanoid } from 'nanoid';
const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
    const handleChange = e => {
        const { name, value } = e.target;
        switch(name) {
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
        dispatch(signIn({email, password}));

        if(email === '' || password === '') {
            return Notify.warning('Please fill in all the fields!');
        }
        reset();
    }

    const reset = () => {
        setEmail('');
        setPassword('');
    };

  const emailInputId = nanoid();
  const passInputId = nanoid();

return (
    <StyledForm onSubmit={handleSubmit} >
        <label htmlFor={emailInputId}
        style={{
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
        
        <label htmlFor={passInputId}
        style={{
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
        
        <StyledButton type="submit">Sign In</StyledButton>

    </StyledForm>
   
)

}

export default SignIn;