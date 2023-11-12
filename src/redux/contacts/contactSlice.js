import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { deleteContactThunk, getContactThunk, postContactThunk } from 'services/fetchContacts';

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

const arr = [getContactThunk, postContactThunk, deleteContactThunk];

const addStatus = status =>
    arr.map((item) => item[status]);

export const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState: contactInitialState,
    extraReducers: builder => {
        builder
            .addCase(getContactThunk.fulfilled, (state, { payload }) => {
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
