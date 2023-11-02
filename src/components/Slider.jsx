import { useState, useEffect } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Wrapper, SliderButton, SliderDotButtons, SliderImage, SliderIndex, SliderRender, Dotselect, Unselect, Container, DetailsContainer, MovieTitle, MovieDesc } from "../styles/Slider.styles";
import { GlobalContainer } from "../styles/Global.styles";
import { imageUrls } from "../data";

const Slider = () => {
    /* Slider logic to go next/prev */
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

    /* Autoplay */
    useEffect(() => {
        const autoPlay = setInterval(showNextimage, 3500);
        return () => {
        clearInterval(autoPlay);
        };
    }, [imageUrls]);


    return (
        <GlobalContainer>
            <Wrapper>
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
                <SliderButton id="next" onClick={showNextimage} style={{right:0, paddingLeft: "10%"}}>
                    <ArrowForwardIosIcon/>
                </SliderButton>
                <SliderIndex>
                    {imageUrls.map((_, index) => (
                        <SliderDotButtons onClick={() => setIndex(index)}>
                            {index === imageIndex ? <Unselect/> : <Dotselect/>}
                        </SliderDotButtons>
                    ))}
                </SliderIndex>
            </Wrapper>
            <DetailsContainer>
                <MovieTitle>{imageUrls[imageIndex].title}</MovieTitle>
                <MovieDesc><MovieTitle/>
                <MovieDesc/>{imageUrls[imageIndex].desc}</MovieDesc>
            </DetailsContainer>
        </GlobalContainer>
    );
}

export default Slider;