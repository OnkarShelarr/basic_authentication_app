import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home()
{
    const nav = useNavigate();
    const [username, setUsername] = useState("");

    useEffect( () => {
        let un = localStorage.getItem("un");
        if (un !== null)
        {
            setUsername(un);
        }
        else
        {
            nav("/login");
        }
    }, []);

    const lo = (event) => {
        event.preventDefault();
        localStorage.removeItem("un");
        nav("/login");
    }

    return(
        <>
        <center>
            <NavBar/>
            <h1> Home Page </h1>
            <h2> Welcome { username } </h2>
            <form onSubmit={ lo }>
                <input type="submit" value="Logout"/>
            </form>
        </center>
        </>
    );
}

export default Home;