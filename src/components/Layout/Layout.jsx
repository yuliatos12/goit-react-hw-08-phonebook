import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar } from "components/AppBar/AppBar";
import { Container } from "components/AppBar/AppBar.styled";
import { Loader } from "components/Loader/Loader";

export const Layout = () => {
    return <>
        <AppBar />
        <Container>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Container>
    </>
};

export default Layout