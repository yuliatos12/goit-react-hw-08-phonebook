import { StyledInput } from "pages/Pages.styled";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filter/filterSlice";
import { getFilter } from "redux/selectors";
import { IoSearchSharp } from "react-icons/io5";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleFilterChange = e => dispatch(setFilter(e.currentTarget.value))

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <input style={{ borderRadius: '5px', border: 'transparent', padding: '5px' }} type="text" name="filter" value={filter} onChange={handleFilterChange} />
            <IoSearchSharp style={{ color: 'rgba(93, 36, 133, 0.85)', width: '25px', height: '25px' }} />
        </div>
    )
}