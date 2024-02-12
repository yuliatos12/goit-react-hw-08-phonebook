import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filter/filterSlice";
import { getFilter } from "redux/selectors";


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleFilterChange = e => dispatch(setFilter(e.currentTarget.value))

    return(
        <label>
                   Find contact <input type="text" name="filter" value={filter} onChange={handleFilterChange}  />
        </label>
    )
}