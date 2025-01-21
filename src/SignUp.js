import NavBar from "./NavBar";
import { useRef, useState, useEffect } from "react";
import app from "./Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUp()
{
    const nav = useNavigate();

    useEffect(() => {
        let un = localStorage.getItem("un");
        if (un !== null)
            nav("/home");
    }, []);

    const rUsername = useRef();
    const rPassword1 = useRef();
    const rPassword2 = useRef();

    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [msg, setMsg] = useState("");

    const hUsername = (event) => { setUsername(event.target.value); }
    const hPassword1 = (event) => { setPassword1(event.target.value); }
    const hPassword2 = (event) => { setPassword2(event.target.value); }

    const save = (event) => {
        event.preventDefault();

        // check nothing shud be empty

        if (password1 === password2)
        {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, username, password1)
            .then(res => {
                nav("/login");
            })
            .catch(err => {
                setMsg("issue" + err);
            });
        }

        else
        {
            setMsg("passwords did not match");
            setPassword1("");
            setPassword2("");
            rPassword1.current.focus();
        }
    }

    return(
        <>
        <center>
            <NavBar/>
            <h1> SignUp Page </h1>
            <form onSubmit={ save }>
                <input type="email" placeholder="enter reg email" ref={rUsername} onChange={hUsername} value={username}/>
                <br/><br/>
                <input type="password" placeholder="enter password" ref={rPassword1} onChange={hPassword1} value={password1}/>
                <br/><br/>
                <input type="password" placeholder="repeat password" ref={rPassword2} onChange={hPassword2} value={password2}/>
                <br/><br/>
                <input type="submit" value="Register"/>
            </form>
            <h2> { msg } </h2>
        </center>
        </>
    );
}

export default SignUp;