import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { currentUser, logOut, signIn, signUp } from './operations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: {
    name: null,
    emai: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  currentUser: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const arr = [signUp, signIn, logOut];

const addStatus = status => {
  return arr.map(el => el[status]);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
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
        state.user = { name: null, emai: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addMatcher(isAnyOf(...addStatus('pending')), handlePending)
      .addMatcher(isAnyOf(...addStatus('rejected')), handleRejected);
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authPersistReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
