import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { COLORS, GlobalBody, GlobalContent, GlobalTitle, GlobalTitleContainer } from "../styles/Global.styles";
import { useLocation } from "react-router-dom";
import { imageUrls, topBox, fanFav, topMonth, directors } from "../data";
import { TabTitle } from "..";
import { DescCont, DescLeft, DescRight, DescSub, DescTitle, MediaContainer, Poster, PosterContainer, Trailer } from "../styles/Movie.styles";
import { MovieDesc } from "../styles/Slider.styles";

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

    /* Get the director */
    var director;
    for ( let i = 0; i < directors.length; i++ ) {
        if ( directors[i].id === locID ) { director = directors[i]; }
    }

    /* Set Page Title */
    TabTitle("MovieBite | " + movie.name);



    return (
        <GlobalBody>
            <Navbar/>
            <GlobalContent style={{color: "white"}}>
                <GlobalTitleContainer style={{marginBottom: "0", color: "white"}}>
                    <GlobalTitle>{movie.name}</GlobalTitle>
                </GlobalTitleContainer>
                <MediaContainer>
                    <PosterContainer>
                        <Poster src={movie.url}/>
                    </PosterContainer>
                    <Trailer src={movie.trailer}/>
                </MediaContainer>
                <DescCont>
                    <DescLeft>
                        <DescTitle style={{marginTop: "0"}}>Director</DescTitle>
                        <DescSub>{director.name}</DescSub>
                        <DescTitle>Stars</DescTitle>
                        <DescSub> </DescSub>
                        <DescSub> </DescSub>
                    </DescLeft>
                    <DescRight style={{width: "63%",
                        borderLeft: "2px solid",
                        borderColor: `${COLORS.med}`}}>
                        <h4 style={{marginBottom: "0.75rem",
                            paddingLeft: "2rem"}}>
                                {movie.genre}</h4>
                        <MovieDesc>&emsp;{movie.desc}</MovieDesc>
                    </DescRight>
                </DescCont>
            </GlobalContent>
            <Footer/>
        </GlobalBody>
    );
}

export default Movie;