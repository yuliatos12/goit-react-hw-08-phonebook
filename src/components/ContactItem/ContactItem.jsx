import { deleteContacts } from "redux/contacts/operations";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { DeleteStyled } from "./ContactItem.styled";
import { IoMdContact } from "react-icons/io";

export const ContactItem = ({ name, number, id }) => {

    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContacts(id));
    return (
        <li style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(94, 75, 152, 0.2)' }}>
            <IoMdContact style={{
                width: '40px',
                height: '40px',
                fill: 'rgba(93, 36, 133, 0.85)'
            }} />
            <div>
                <p>{name}</p>
                <p style={{ color: 'rgba(93, 36, 133, 0.85)' }}>{number}</p>
            </div>
            <DeleteStyled type="button" onClick={handleDelete}><MdDelete style={{
                width: '25px',
                height: '25px',
                fill: 'darkred',
                cursor: 'pointer'
            }} /></DeleteStyled>
        </li>
    )
}