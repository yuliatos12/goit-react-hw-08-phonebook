import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";


export const Layout = () => {
    return <>
       
          
            <AppBar/>
     

        <main>
            <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            </Suspense>
            
        </main>

    </>
};

export default Layout