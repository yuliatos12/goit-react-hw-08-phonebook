import { useState } from "react";
import { Form, FormInput, FormButton, FormLabel } from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { postContact } from "redux/contacts/operations";
import { getContacts } from "redux/selectors";
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { StyledButton, StyledForm, StyledInput } from "pages/Pages.styled";
import { AuthLinkStyled } from "components/AppBar/AppBar.styled";

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const dispatch = useDispatch();

    const contacts = useSelector(getContacts);

    const handleChange = e => {
        const {name, value} = e.target;
        switch(name) {
            case 'name':
                setName(value); 
                 break;
            case 'number':
                setNumber(value); 
                break;

                default:
                    return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(name === '' || number === '') {
return Notify.warning('Please fill in the fields')
        }

        const data = { name, number };
        const newContact = { ...data, id: nanoid() };

        const existingContact = contacts.find(contact => contact.name === name);

      if (existingContact) {
        return Notify.warning(`${name} is already in contacts`);
      }

      dispatch(postContact(newContact));
        reset();

    }

    const reset = () => {
        setName('');
        setNumber('');
    };
    return (
        <StyledForm style={{
           border: '1px solid white',
           background: 'rgba(242, 233, 238, 0.2)'
          }}onSubmit={handleSubmit}>
            
            <p style={{
            color: "lightgrey",
            marginTop: "5px",
            fontSize: '18px',
            textAlign: 'center',
          }}>You can add your contacts here:</p>
                <StyledInput type="text" name="name" placeholder='Enter the name' value={name} onChange={handleChange}/>
           
            
                <StyledInput type="tel" name="number" placeholder='Enter the phone number' value={number} onChange={handleChange}/>
            
            <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
    )
}