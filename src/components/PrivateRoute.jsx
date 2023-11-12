import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "redux/auth/authSelectors";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isCurrentUser = useSelector(selectCurrentUser);
    const redirect = !isLoggedIn && !isCurrentUser;

  return redirect ? <Navigate to={redirectTo} /> : Component;
};