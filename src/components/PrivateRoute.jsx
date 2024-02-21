
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentUser, getIsLoggedIn } from "redux/auth/selectors";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isCurrentUser = useSelector(getCurrentUser);
    const redirect = !isLoggedIn && !isCurrentUser;

  return redirect ? <Navigate to={redirectTo} /> : Component;
};