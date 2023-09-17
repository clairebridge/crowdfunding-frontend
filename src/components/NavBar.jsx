import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import useAuth from "../hooks/use-auth.js";
import Logo from '../assets/icons/logo.svg'

// this is a comment
function NavBar() {

    const {auth, setAuth} = useAuth();
    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };
    return (
    <nav className= 'navbar'>
        <div className= 'container'>
            <div className='logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='nav-elements'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        {auth.token ? (
                            <>
                            <Link to="/" onClick={handleLogout}>
                            Log Out
                            </Link>
                            <Link to="/create-project">Create Project</Link>
                            <Link to="/create-pledge">Pledge</Link>
                            </>
                        
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                    </li>
                </ul>  
            </div>   
        </div>
        <Outlet /> 
    </nav>
    );
    }

export default NavBar;
