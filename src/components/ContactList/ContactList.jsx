import { selectFilter } from "redux/contacts/contactFilterSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectPhoneBookValue } from "redux/contacts/contactSelectors";
import { getContactThunk } from "services/fetchContacts";
import { useEffect, useState } from "react";
import * as React from 'react';
import { Box, List, Typography } from "@mui/material";
import { ContactItem } from "./ContactItem";

export const ContactsList = () => {
    const dispatch = useDispatch();
    const [load] = useState(true);
    const contacts = useSelector(selectPhoneBookValue);
    const filterContacts = useSelector(selectFilter);

   

    useEffect(() => {
        dispatch(getContactThunk())
    }, [dispatch]);

    const toLowerCase = filterContacts.toLowerCase();
    const visibleContacts = contacts.filter(({ name }) =>
        (name.toLowerCase().includes(toLowerCase)));
    
    return (
        <Box >
            <Typography component="h1" variant="h5" sx={{ marginTop: '20px', color: '#011f4b', textAlign: 'center' }} >
                Your Contacts:
            </Typography>
            {load}
            <List sx={{ width: 500, margin: 'auto' }}>
                {visibleContacts.map((contact) =>
                    <ContactItem contact={contact} key={contact.id} />
                )}
            </List>
        </Box>
    );
};