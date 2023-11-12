import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrentUserThunk } from "services/fetchAuth";
import { PublicRoute } from "components/PublicRoute";
import { PrivateRoute } from "components/PrivateRoute";
import { Layout } from "components/Layout/Layout";
import { lazy, useEffect } from "react";

const HomePage = lazy(() => import("pages/Home"));
const SignIn = lazy(() => import("pages/LogIn"));
const SignUp = lazy(() => import("pages/SignUp"));
const ContactsPage = lazy(() => import("pages/Contacts"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk())
  }, [dispatch]);

  return (
    <Routes>
      
        <>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<PublicRoute redirectTo="/contacts" component={<SignUp />} />} />
            <Route path="/login" element={<PublicRoute redirectTo="/contacts" component={<SignIn />} />} />
            <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
            <Route path="*" element={<PrivateRoute redirectTo="/login" component={<HomePage />} />} />
          </Route>
        </>
          </Routes>
  );
};