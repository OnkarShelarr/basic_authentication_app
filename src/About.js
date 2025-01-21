import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function About()
{
    const nav = useNavigate();
    const [username, setusername] = useState("");

    useEffect( () => {
        let un = localStorage.getItem("un");
        if (un !== null)
        {
            setusername(un);
        }
        else
        {
            nav("/login");
        }
    }, []);

    return(
        <>
        <center>
            <NavBar/>
            <h1> About Page </h1>
            <h2> I'm Onkar Shelar. I have done MCA and currently doing JS MERN Stack Developer Course.</h2>
        </center>
        </>
    );
}

export default About;