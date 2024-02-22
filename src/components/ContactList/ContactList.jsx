import { ContactItem } from "components/ContactItem/ContactItem"
import { StyledForm } from "pages/Pages.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { getContacts } from "redux/selectors";
import { getFilter } from "redux/selectors"; 

export const ContactList = () => {

 
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
    return(
       
        <ul style={{background: 'rgba(242, 233, 238, 0.9)',
          padding: '3em',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          boxShadow: '20px 20px 40px -6px rgba(0,0,0,0.2)'}}>
           {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
        ></ContactItem>
      ))}
        </ul>
       
       
        
    )
}

