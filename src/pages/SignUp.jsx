import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "redux/auth/operations";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { StyledButton, StyledForm, StyledInput, StyledLabel } from "./Pages.styled";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
    const handleChange = e => {
        const { name, value } = e.target;
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
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signUp({ name, email, password }));

        if (name === '' || email === '' || password === '') {
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
        <div style={{ textAlign: 'center', paddingTop: '50px' }}>
            <p style={{
                color: "lightgrey",
                marginTop: "5px",
                fontSize: '20px',
            }}>Please, sign up to start using the app</p>
            <StyledForm autoComplete="off" onSubmit={handleSubmit}>
                <StyledLabel tmlFor={nameInputId} >
                    Name:
                </StyledLabel>
                <StyledInput id={nameInputId} type="text" name="name" value={name} onChange={handleChange} />

                <StyledLabel htmlFor={emailInputId} >
                    Email:
                </StyledLabel>
                <StyledInput id={emailInputId} type="email" name="email" value={email} onChange={handleChange} />

                <StyledLabel tmlFor={passInputId} >
                    Password:
                </StyledLabel>
                <StyledInput id={passInputId} type="password" name="password" value={password} onChange={handleChange} />

                <StyledButton type="submit">Sign Up</StyledButton>
<p style={{
                color: "lightgrey",
                marginTop: "5px",
                marginBottom: 0,
                fontSize: '14px',
            }}><Link style={{color: 'white'}} to='/login'>Log in</Link> if you already have an account</p>
            </StyledForm>
        </div>


    )

}

export default SignUp;