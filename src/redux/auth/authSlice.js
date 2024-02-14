import { createSlice } from '@reduxjs/toolkit';
import { currentUser, logOut, signIn, signUp } from './operations';
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage' 

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
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
})
.addCase(signIn.fulfilled, (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
})
.addCase(logOut.fulfilled, (state, action) => {
    state.user = { name: null, emai: null } ;
    state.token = null;
    state.isLoggedIn = false;
})
.addCase(currentUser.fulfilled, (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
})

    }
})

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
};


export const authPersistReducer = persistReducer(
    persistConfig,
    authSlice.reducer
);