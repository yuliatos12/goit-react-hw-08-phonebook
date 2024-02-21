
import { deleteContacts } from "redux/contacts/operations";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { DeleteStyled } from "./ContactItem.styled";
import { IoMdContact } from "react-icons/io";

export const ContactItem = ({name, number, id}) => {
    
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContacts(id));
    return (
        <li style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
            <IoMdContact /> 
            <p>{name}: {number}</p>
            <DeleteStyled type="button" onClick={handleDelete}><MdDelete style={{width: '25px',
        height: '25px',
        fill: 'red'}}/></DeleteStyled>
        </li>
    )
}