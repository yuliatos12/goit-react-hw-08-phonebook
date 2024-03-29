import { lazy, useEffect } from "react";
import { Layout } from './Layout/Layout';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentUser } from "redux/auth/operations";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const SignUp = lazy(() => import('../pages/SignUp'));
const SignIn = lazy(() => import('../pages/SignIn'));
const HomePage = lazy(() => import('../pages/HomePage'));
const Contacts = lazy(() => import('../pages/Contacts'))

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<PublicRoute redirectTo="/contacts" component={<SignUp />} />} />
        <Route path="/login" element={<PublicRoute redirectTo="/contacts" component={<SignIn />} />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
        <Route path="*" element={<PrivateRoute redirectTo="/login" component={<HomePage />} />} />
      </Route>
    </Routes>
  )
}