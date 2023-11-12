import { ListItem, IconButton, ListItemButton, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Cancel';
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "services/fetchContacts";


export const ContactItem = ({ contact }) => {
    const { id, name, number } = contact;
    const dispatch = useDispatch();

    const deleteContact = (contactId) => {
        dispatch(deleteContactThunk(contactId))
    };

    return (
        <ListItem key={id} secondaryAction={
            <IconButton onClick={() => deleteContact(id)} aria-label="delete">
                 <DeleteIcon sx={{ color: 'red' }}/>
            </IconButton>}>
            <ListItemButton>
                <ListItemText>{name}: {number}</ListItemText>
            </ListItemButton>
        </ListItem>
    )
};