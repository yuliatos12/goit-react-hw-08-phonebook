// import { ContactForm } from "./ContactForm/ContactForm"
// import { ContactList } from "./ContactList/ContactList";
// import { Filter } from "./Filter/Filter";
// import { Container } from "./App.styled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getError, getLoading } from "redux/selectors";
import { lazy, useEffect } from "react";
import { Layout } from './Layout/Layout';
import { Routes, Route } from "react-router-dom";

const SignUp = lazy(() => import('../pages/SignUp'));

  export const App = () => {
const isLoading = useSelector(getLoading);
const error = useSelector(getError);

return(
  // <Container>
  // <ContactForm/>
  // <Filter/>
  // {isLoading && <p>Loading...</p>}
  // {error && <p>Error</p>}
  // <ContactList />
  // </Container>
  <Routes>

  <Route path="/" element={<Layout/>}>
  <Route path="/register" element={<SignUp/>}/>
     
  </Route>
  
   </Routes>
)
}