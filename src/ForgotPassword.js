import NavBar from "./NavBar";
import { useRef, useState, useEffect } from "react";
import app from "./Firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ForgotPassword()
{
    const nav = useNavigate();
    useEffect( () => {
        let un = localStorage.getItem("un");
        if (un !== null) 
        {
                nav("/home");    
        }
    }, []);

    const rUsername = useRef();

    const [username, setUsername] = useState("");
    const [msg, setMsg] = useState("");

    const hUsername = (event) => { setUsername(event.target.value); }

    const save = (event) => {
        event.preventDefault();

            const auth = getAuth();
            sendPasswordResetEmail(auth, username)
            .then(res => {
                nav("/login");
            })
            .catch(err => {
                setMsg("issue" + err);
            });
    }

    return(
        <>
        <center>
            <NavBar/>
            <h1> ForgotPassword Page </h1>
            <form onSubmit={ save }>
                <input type="email" placeholder="enter reg email" ref={ rUsername } onChange={ hUsername } value={username}/>
                <br/><br/>
                <input type="submit" value="Reset Password" />
            </form>
            <h2> { msg } </h2>
        </center>
        </>
    );
}

export default ForgotPassword;