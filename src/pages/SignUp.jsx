import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "redux/auth/operations";


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
        reset();
    }

    const reset = () => {
        setEmail('');
        setPassword('');
        setName('');
    };

return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" name="name" value={name} onChange={handleChange}/>
        </label>
        <label>
            Email:
            <input type="email" name="email" value={email} onChange={handleChange}/>
        </label>
        <label>
           Password:
            <input type="password" name="password" value={password} onChange={handleChange}/>
        </label>
        <button type="submit">Sign Up</button>

    </form>
   
)

}

export default SignUp;