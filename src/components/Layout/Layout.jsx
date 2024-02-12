import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Link } from "react-router-dom";


export const Layout = () => {
    return <>
        <header>
            <ul>
                <li><Link to='/register'>Sign Up</Link></li>
                
            </ul>
        </header>

        <main>
            <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            </Suspense>
            
        </main>

    </>
};

export default Layout