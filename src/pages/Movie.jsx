import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalBody, GlobalContent } from "../styles/Global.styles";
import { useLocation } from "react-router-dom";
import { imageUrls, topBox, fanFav, topMonth } from "../data";

const Movie = () => {
    /* Split path to get movie location & ID */
    const location = useLocation();
    const locParts = location.pathname.split('/');
    const subParts = locParts[2].split('-');
    const locCode = subParts[0];
    const locID = subParts[1];

    /* Assign correct data to be populated */
    var data;
    if ( locCode === "TB" ) { data = topBox; }
    else if ( locCode === "FF" ) { data = fanFav; }
    else if ( locCode === "TM" ) { data = topMonth; }
    else if ( locCode === "SL" ) { data = imageUrls; }

    /* Get the right movie */
    var movie;
    for ( let i = 0; i < data.length; i++ ) {
        if ( data[i].id === locParts[2] ) { movie = data[i]; }
    }



    return (
        <GlobalBody>
            <Navbar/>
            <GlobalContent style={{color: "white"}}>
                <h1 style={{padding: "20%"}}>{movie.title}</h1>
            </GlobalContent>
            <Footer/>
        </GlobalBody>
    );
}

export default Movie;