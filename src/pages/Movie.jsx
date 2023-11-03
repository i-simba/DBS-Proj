import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GlobalBody, GlobalContent } from "../styles/Global.styles";

const Movie = () => {



    return (
        <GlobalBody>
            <Navbar/>
            <GlobalContent style={{color: "white"}}>
                Movie
            </GlobalContent>
            <Footer/>
        </GlobalBody>
    );
}

export default Movie;