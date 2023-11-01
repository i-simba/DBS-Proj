import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container, SliderButton, SliderDotButtons, SliderImage, SliderIndex, SliderRender, Dotselect, Unselect } from "../styles/Slider.styles";

const Slider = () => {
    /* Temp movie poster images for slider */
    const imageUrls = [
        {
            url: "https://images7.alphacoders.com/131/1314905.jpeg",
        },
        {
            url: "https://images8.alphacoders.com/133/1331131.jpeg",
        },
        {
            url: "https://wallpapercave.com/wp/wp5281731.jpg",
        },
        {
            url: "https://wallpapers.com/images/hd/avatar-film-hd-promo-poster-u3ek6neodfrdb3ox.jpg",
        },
        {
            url: "https://images6.alphacoders.com/112/1122542.jpg",
        },
        {
            url: "https://i.pinimg.com/originals/e9/24/0b/e9240b7c5b29b0fb4aa86304a03287e8.jpg",
        },
    ];

    const [imageIndex, setIndex] = useState(0);
    function showNextimage() {
        setIndex(index => {
            if (index === imageUrls.length - 1) return 0;
            return index + 1;
        })
    }
    function showPrevImage() {
        setIndex(index => {
            if (index === 0) return imageUrls.length - 1;
            return index - 1;
        })
    }



    return (
        <Container>
            <SliderRender>
                {imageUrls.map(url => (
                    <SliderImage
                        key={url}
                        src={url.url}
                        style={{translate: `${-100 * imageIndex}%`}}/>
                ))}
            </SliderRender>
            <SliderButton onClick={showPrevImage} style={{left: 0, paddingRight: "10%"}}>
                <ArrowBackIosIcon/>
            </SliderButton>
            <SliderButton onClick={showNextimage} style={{right:0, paddingLeft: "10%"}}>
                <ArrowForwardIosIcon/>
            </SliderButton>
            <SliderIndex>
                {imageUrls.map((_, index) => (
                    <SliderDotButtons onClick={() => setIndex(index)}>
                        {index === imageIndex ? <Unselect/> : <Dotselect/>}
                    </SliderDotButtons>
                ))}
            </SliderIndex>
        </Container>
    );
}

export default Slider;