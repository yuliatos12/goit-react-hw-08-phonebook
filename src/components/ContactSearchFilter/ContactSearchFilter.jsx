import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterSet, selectFilter } from "redux/contacts/contactFilterSlice";
import { TextField, Box } from '@mui/material';

export const Filter = () => {
    const dispatch = useDispatch();
    const filtContacts = useSelector(selectFilter);

    const handleFilterChange = (event) => {
        const { value } = event.currentTarget;
        dispatch(filterSet(value))
    };
    
    return (
        <Box component="div">
            <TextField
                margin="normal"
                inputProps={{ inputMode: 'text', pattern: "^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" }} 
                sx={{
                    width: 324
                }}
                label="Find contacts by name:"
                type="text"
                name="filter"
                value={filtContacts}
                title="Enter the name"
                onChange={handleFilterChange}
            />
        </Box>
    );
};