import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";

const Contacts = () => {
    return (
        <div style={{paddingTop: '50px'}}>
        <ContactForm/>
        <ContactList/>
        </div>
        
    )
}

export default Contacts;