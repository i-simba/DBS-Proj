import { GlobalContainer, GlobalCardContainer } from "../styles/Global.styles";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { topBox, fanFav, topMonth, birthMonth } from "../data";
import { Link } from "react-router-dom";

const Carousel = ({caller}) => {
    /* Media Query */
    const [numSlides, setNumSlides] = useState(5);
    const [isArrow, setArrow] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1800) {
                setNumSlides(6);
            } else if (window.innerWidth >= 1500) {
                setNumSlides(5);
            } else if (window.innerWidth >= 1200) {
                setNumSlides(4);
            } else if (window.innerWidth >= 900) {
                setNumSlides(3);
            } else {
                setNumSlides(2.03);
                setArrow(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    /* Slider settings */
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: numSlides,
        slidesToScroll: 2,
        arrows: isArrow,
    };

    /* Populate base on caller */
    var data;
    var isTop = false;
    var isFan = false;
    var isPerson = false;
    if (caller === "topBox") { data = topBox; isTop = true };
    if (caller === "fanFav") { data = fanFav; isFan = true };
    if (caller === "topMonth") { data = topMonth; isFan = true };
    if (caller === "person") { data = birthMonth; isPerson = true };
    function getSub(movie) {
        if (isTop) return movie.gross;
        if (isFan) return movie.rating;
        return "NULL";
    }


    return (
        <GlobalContainer>
            <Slider {...settings}>
                {data.map((movie, index ) => [
                    <GlobalCardContainer>
                        {isPerson ? 
                            <Link to={`/actor/${movie.id}`} style={{textDecoration: "none"}}>
                                <Cards
                                    key={movie.id}
                                    image={movie.url}
                                    title={movie.name}
                                    sub={movie.age}
                                    bday={movie.day}
                                    person={true}
                                    index={index}/>
                            </Link>
                            :
                            <Link to={`/movie/${movie.id}`} style={{textDecoration: "none"}}>
                                <Cards
                                    key={movie.id}
                                    image={movie.url} 
                                    title={movie.name} 
                                    sub={getSub(movie)}
                                    topBox={isTop}
                                    fanFav={isFan}
                                    index={index}/>
                            </Link>
                        }
                    </GlobalCardContainer>
                ])}
            </Slider>
        </GlobalContainer>
    );
}

export default Carousel;