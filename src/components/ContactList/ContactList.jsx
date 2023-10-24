import { getFilter } from "redux/contactFilterSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPhoneBookValue } from "redux/contactSlice";
import { deleteContactThunk, getContactsThunk } from "services/mock-api";
import { useEffect } from "react";


export const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContactsThunk())
    }, [dispatch]);


    const phoneBook = useSelector(getPhoneBookValue);
    const filterPhoneBook = useSelector(getFilter);

    const lowerCaseFilter = filterPhoneBook.toLowerCase();
    const availableContacts = phoneBook.filter(({ name }) =>
        (name.toLowerCase().includes(lowerCaseFilter)));
  
    const deleteContact = (contactId) => {
        dispatch(deleteContactThunk(contactId))
    };
    
    return (
        <ul>
            {availableContacts.map(({ name, number, id }) => (
                <li key={id}>
                    <p>{name}: {number}</p>
                    <button type="button" onClick={() => deleteContact(id)}>Delete</button>
                </li>))}
        </ul>
    );
};




