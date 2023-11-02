import { GlobalContainer, GlobalCardContainer } from "../styles/Global.styles";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { topBox } from "../data";

const Carousel = () => {
    /* Media Query */
    const [numSlides, setNumSlides] = useState(5);
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
                setNumSlides(2);
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
    };



    return (
        <GlobalContainer>
            <Slider {...settings}>
                {topBox.map(movie => [
                    <GlobalCardContainer>
                        <Cards image={movie.url} title={movie.title} sub={movie.gross}/>
                    </GlobalCardContainer>
                ])}
            </Slider>
        </GlobalContainer>
    );
}

export default Carousel;