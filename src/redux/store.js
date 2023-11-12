import { configureStore } from '@reduxjs/toolkit'
import { filterSlice } from './contacts/contactFilterSlice'
import { phoneBookSlice } from './contacts/contactSlice'
import { authPersistReducer } from './auth/authSlice';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

  

  export const store = configureStore({
      reducer: {
          auth: authPersistReducer,
          phoneBook: phoneBookSlice.reducer,
          filter: filterSlice.reducer,
      },
      middleware: getDefaultMiddleware =>
          getDefaultMiddleware({
              serializableCheck: {
                  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
          }),
  });
  
  export const persistor = persistStore(store);