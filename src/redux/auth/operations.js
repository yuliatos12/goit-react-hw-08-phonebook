import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const signUp = createAsyncThunk(
    'auth/signUp',
    async (credentials, {rejectWithValue}) => {
        try {
            const {data} = await axios.post('/users/signup', credentials);
            return data;
        }
        catch(error) {
            return rejectWithValue(error.message);
        }
    }
);