import { Outlet } from "react-router-dom"
import { Suspense } from "react"; 
import { Bar } from "components/AppBar/AppBar";
    
export const Layout = () => {
    return <>
        <header>
            <Bar />
        </header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
    </>
};