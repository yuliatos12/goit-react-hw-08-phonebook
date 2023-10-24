import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { deleteContactThunk, getContactsThunk, postContactThunk } from 'services/mock-api';

const contactInitialState = {
    contacts: [],
    isLoading: false,
    error: null
};

const onPending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const onRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const arr = [getContactsThunk, postContactThunk, deleteContactThunk];

const addStatus = status =>
    arr.map((item) => item[status]);

export const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState: contactInitialState,
    extraReducers: builder => {
        builder
            .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = payload;
                state.error = null;
            })
            .addCase(postContactThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = [...state.contacts, payload]
                state.error = null;
            })
            .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = state.contacts.filter(contact => contact.id !== payload.id)
                state.error = null;
            })
            .addMatcher(isAnyOf(...addStatus('pending')), onPending)
            .addMatcher(isAnyOf(...addStatus('rejected')), onRejected)
    }
});

export const getPhoneBookValue = state => state.phoneBook.contacts;
export const getIsLoading = state => state.phoneBook.isLoading;
export const getError = state => state.phoneBook.error;