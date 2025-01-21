import NavBar from "./NavBar";
import { useRef, useState, useEffect } from "react";
import app from "./Firebase";
import { getAuth, updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ChangePassword()
{
    const nav = useNavigate();

    useEffect( () => {
        let un = localStorage.getItem("un");
        if (un === null) 
            nav("/");    
    }, []);

    const rPassword1 = useRef();
    const rPassword2 = useRef();

    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [msg, setMsg] = useState("");

    const hPassword1 = (event) => { setPassword1(event.target.value); }
    const hPassword2 = (event) => { setPassword2(event.target.value); }

    const save = (event) => {
        event.preventDefault();

            if (password1 === password2)
            {
                const auth = getAuth();
                const user = auth.currentUser;
                updatePassword(user, password1)
                .then(res => {
                    localStorage.removeItem("un");
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
            <h1> ChangePassword Page </h1>
            <form onSubmit={ save }>
                <input type="password" placeholder="enter password" ref={ rPassword1 } onChange={ hPassword1 } value={password1}/>
                <br/><br/>
                <input type="password" placeholder="repeat password" ref={ rPassword2 } onChange={ hPassword2 } value={password2}/>
                <br/><br/>
                <input type="submit" value="Register" />
            </form>
            <h2> { msg } </h2>
        </center>
        </>
    );
}

export default ChangePassword;