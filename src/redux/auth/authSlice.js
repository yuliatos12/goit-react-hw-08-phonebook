import { createSlice } from '@reduxjs/toolkit';
import { signUp } from './operations';

const initialState = {
    user: {
        name: null,
        emai: null
    },
    token: null,
    isLoggedIn: false,
    error: null,
    currentUser: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
builder
.addCase(signUp.fulfilled, (state, action) => {
    
})

    }
})


export const authReducer = authSlice.reducer;