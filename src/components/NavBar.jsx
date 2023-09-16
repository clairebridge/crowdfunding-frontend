import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import Logo from '../assets/icons/logo.svg'

// this is a comment
function NavBar() {
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
                        <Link to="/login">Log In</Link>
                        <Link to="/create-project">Create Project</Link>
                    </li>
                </ul>  
            </div>   
        </div>
        <Outlet /> 
    </nav>
    );
    }

export default NavBar;
