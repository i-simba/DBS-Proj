import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalBody, GlobalContent } from "../styles/Global.styles";
import { useLocation } from "react-router-dom";
import { birthMonth } from "../data";

const Actors = () => {
    /* Get actor ID from path name */
    const location = useLocation();
    const locID = location.pathname.split('/');

    /* Get the right actor */
    var actor;
    for ( let i = 0; i < birthMonth.length; i++ ) {
        if ( birthMonth[i].id === locID[2] ) { actor = birthMonth[i]; }
    }



    return (
        <GlobalBody>
            <Navbar/>
            <GlobalContent style={{color: "white"}}>
                <h1 style={{padding: "20%"}}>{actor.name}</h1>
            </GlobalContent>
            <Footer/>
        </GlobalBody>
    );
}

export default Actors;