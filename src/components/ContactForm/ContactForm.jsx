import * as React from 'react';
import { useState, useEffect } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from "react-redux";
import { selectIsContactAdd, selectPhoneBookValue } from "redux/contacts/contactSelectors";
import { postContactThunk } from "services/fetchContacts";
import { Button, TextField, Box, Typography } from '@mui/material';

export const options = {
    width: '400px',
    position: 'top-right',
    timeout: 1500,
    fontSize: '20px',
};

export const Form = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [add, setAdd] = useState(false);

    const dispatch = useDispatch();
    const phoneBook = useSelector(selectPhoneBookValue);
    const isContactAdd = useSelector(selectIsContactAdd);

    useEffect(() => {
        setAdd(false)
    }, [phoneBook])

    useEffect(() => {
        if (isContactAdd) {
            reset();
        }
    }, [isContactAdd]);
    
    const handleContactAdd = (event) => {
        event.preventDefault();
        const newObj = { name, number };

        if (isContactNew(phoneBook, newObj) !== undefined) {
            Notify.warning(`${newObj.name} is already in contacts`, options);
            return;
        };
        setAdd(true);
        dispatch(postContactThunk(newObj))
        reset();
    };

    const isContactNew = (phoneBook, newContact) => {
        return phoneBook.find(({ name }) =>
            name.toLowerCase() === newContact.name.toLowerCase())
    };

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
        
            default:
                break;
        };
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <>
            <Typography component="h1" variant="h5">
                Add Contact
            </Typography>
            <Box component="form" onSubmit={handleContactAdd} sx={{ mt: 1 }}>
                <TextField
                    sx={{}}
                    inputProps={{ inputMode: 'text', pattern: "^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" }} 
                    margin="normal"
                    fullWidth
                    label="Name"
                    type="text"
                    name="name"
                    value={name}
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                />
                <TextField
                    sx={{}}
                    inputProps={{ inputMode: 'tel', pattern: '[0-9]*' }} 
                    margin="normal"
                    fullWidth
                    label="Phone number"
                    type="tel"
                    name="number"
                    value={number}
                    required
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ 
                        mt: 3, 
                        mb: 2, 
                        display: 'flex', 
                        gap: 3, 
                        backgroundColor: '#6497b1',
                        '&:hover': {
                            backgroundColor: '#011f4b'
                          } }}
                >
                    {add }
                    <p>Add contact</p> 
                </Button>
            </Box>
            </>
    );
};