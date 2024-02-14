import { Link } from "react-router-dom";

export const AuthNav = () => {
    return (
<>
            <ul>
                <li><Link to='/register'>Sign Up</Link></li>
                <li><Link to='/login'>Sign In</Link></li>
                
            </ul>
</>
    );
}