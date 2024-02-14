import { useSelector } from "react-redux";
import { getUserName } from "redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
export const UserMenu = () => {

    const name = useSelector(getUserName);
    const dispatch = useDispatch();

    const handleLogOut = () => dispatch(logOut());
    return (
<>
<div>
    <p>Welcome, {name}</p>
    <button onClick={handleLogOut}>Log Out</button>
</div>
</>
    );
}