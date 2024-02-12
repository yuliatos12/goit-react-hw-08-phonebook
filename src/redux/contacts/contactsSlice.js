import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, postContact, deleteContacts } from './operations';

const handlePending = (state) => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const arr = [fetchContacts, postContact, deleteContacts];

const addStatus = status => {
    return arr.map(el => el[status]);
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
            state.error = null;
        })
        .addCase(postContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items.push(action.payload);
            state.error = null;
        })
        .addCase(deleteContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = state.items.filter(el => el.id !== action.payload.id);
            state.error = null;
        })

        .addMatcher(isAnyOf(...addStatus('pending')), handlePending)
        .addMatcher(isAnyOf(...addStatus('rejected')), handleRejected)
    }
}
)
 
  
  export const contactsReducer = contactsSlice.reducer;
 