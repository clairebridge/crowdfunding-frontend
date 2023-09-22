import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";
import useAuth from "../hooks/use-auth.js";
import "./form.css";

function LoginForm() {
    const navigate = useNavigate();
    const {setAuth} = useAuth();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        console.log("inside handleSubmit")
        event.preventDefault();
        console.log(credentials.username);
        console.log(credentials.password);
        if (credentials.username && credentials.password) {
            console.log("inside the call")
            postLogin(credentials.username, credentials.password)
                .then((response) => {
                    window.localStorage.setItem("token", response.token);
                    setAuth({
                        token: response.token,
                    });
                    console.log("inside callback")
                    navigate("/");
                })
                // .catch(err)
            }
        };


    return (
    <form>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Enter username" onChange={handleChange} />
            
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Password" onChange={handleChange}/>
            
        </div>
        <button type="submit" onClick={handleSubmit}>
            Login
        </button>   
    </form>  
    );
}

export default LoginForm;