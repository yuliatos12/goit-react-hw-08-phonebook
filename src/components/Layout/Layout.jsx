import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";
import { Container } from "components/AppBar/AppBar.styled";


export const Layout = () => {
    return <>
       
          
            <AppBar/>
     

        <Container>
            
            <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            </Suspense>
            
        </Container>

    </>
};

export default Layout