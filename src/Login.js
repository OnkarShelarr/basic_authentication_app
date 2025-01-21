import NavBar from "./NavBar";
import { useRef, useState, useEffect } from "react";
import app from "./Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login()
{
    const nav = useNavigate();
    useEffect( () => {
        let un = localStorage.getItem("un");
        if (un !== null) 
        {
            let un = localStorage.getItem("un");
            if (un !== null)
                nav("/home");    
        }
    }, []);

    const rUsername = useRef();
    const rPassword = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const hUsername = (event) => { setUsername(event.target.value); }
    const hPassword = (event) => { setPassword(event.target.value); }

    const save = (event) => {
        event.preventDefault();

            const auth = getAuth();
            signInWithEmailAndPassword(auth, username, password)
            .then(res => {
                localStorage.setItem("un", username);
                nav("/home");
            })
            .catch(err => {
                setMsg("issue" + err);
            });
    }

    return(
        <>
        <center>
            <NavBar/>
            <h1> Login Page </h1>
            <form onSubmit={ save }>
                <input type="email" placeholder="enter reg email" ref={ rUsername } onChange={ hUsername } value={username}/>
                <br/><br/>
                <input type="password" placeholder="enter password" ref={ rPassword } onChange={ hPassword } value={password}/>
                <br/><br/>
                <input type="submit" value="Login" />
            </form>
            <h2> { msg } </h2>
        </center>
        </>
    );
}

export default Login;