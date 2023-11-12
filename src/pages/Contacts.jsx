import { Form } from "components/ContactForm/ContactForm";
import { ContactsList } from "components/ContactList/ContactList";
import { Filter } from "components/ContactSearchFilter/ContactSearchFilter";
import { CssBaseline, Container, Box } from '@mui/material';
import * as React from 'react';
import { boxContactsStyled } from "./PagesStyled";

const ContactsPage = () => {
    
    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Box sx={boxContactsStyled}>
                <Form />
                <Filter />
                <ContactsList />
                
            </Box>
        </Container>
    )
};

export default ContactsPage;