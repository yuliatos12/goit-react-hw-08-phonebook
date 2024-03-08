import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/selectors";

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}