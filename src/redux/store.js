import { configureStore } from '@reduxjs/toolkit'
import { filterSlice } from './contactFilterSlice'
import { phoneBookSlice } from './contactSlice'

export const store = configureStore({
    reducer: {
        phoneBook: phoneBookSlice.reducer,
        filter: filterSlice.reducer,
    },
});