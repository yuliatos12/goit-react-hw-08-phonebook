import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const URL = 'https://653393ebd80bd20280f699a8.mockapi.io/contacts';

const getContacts = async (_, thunkAPI) => {
    try {
        const response = await axios.get(URL);
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

const postContact = async (newContact, thunkAPI) => {
    try {
        const response = await axios.post(URL, newContact);
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

const deleteContact = async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`${URL}/${contactId}`);
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

export const getContactsThunk = createAsyncThunk(
    'phoneBook/getContacts',
    getContacts
);

export const postContactThunk = createAsyncThunk(
    'phoneBook/postContact',
    postContact
);
    
export const deleteContactThunk = createAsyncThunk(
    'phoneBook/deleteContact',
    deleteContact
);