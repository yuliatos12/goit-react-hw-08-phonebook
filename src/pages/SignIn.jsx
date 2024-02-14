import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "redux/auth/operations";


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
        reset();
    }

    const reset = () => {
        setEmail('');
        setPassword('');
    };

return (
    <form onSubmit={handleSubmit}>
        <label>
            Email:
            <input type="email" name="email" value={email} onChange={handleChange}/>
        </label>
        <label>
           Password:
            <input type="password" name="password" value={password} onChange={handleChange}/>
        </label>
        <button type="submit">Sign In</button>

    </form>
   
)

}

export default SignIn;