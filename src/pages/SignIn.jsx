import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "redux/auth/operations";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { StyledButton, StyledForm, StyledInput, StyledLabel } from "./Pages.styled";
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
    <div style={{textAlign: 'center', paddingTop: '50px'}}>
    <p style={{
            color: "lightgrey",
            marginTop: "5px",
            fontSize: '20px',
          }}>Please, log in to go to your contacts</p>
    <StyledForm onSubmit={handleSubmit} >
        <StyledLabel htmlFor={emailInputId}
       >
            Email:
            </StyledLabel>
            <StyledInput id={emailInputId} type="email" name="email" value={email} onChange={handleChange}/>
        
        <StyledLabel htmlFor={passInputId}
        >
           Password:
           </StyledLabel>
            <StyledInput id={passInputId} type="password" name="password" value={password} onChange={handleChange}/>
        
        <StyledButton type="submit">Log In</StyledButton>

    </StyledForm>
    </div>
    
   
)

}

export default SignIn;