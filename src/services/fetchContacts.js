import { createAsyncThunk } from '@reduxjs/toolkit';
import { options } from 'components/ContactForm/ContactForm';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getContacts = async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

const postContact = async (newContact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', newContact);
    Notify.success(`Contact added`, options);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

const deleteContact = async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    Notify.warning(`Contact deleted`, options);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const getContactThunk = createAsyncThunk(
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
