import { useState, useEffect } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Wrapper, SliderButton, SliderDotButtons, SliderImage, SliderIndex, SliderRender, Dotselect, Unselect, DetailsContainer, MovieTitle, MovieDesc, ImgLink } from "../styles/Slider.styles";
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
    }, []);


    return (
        <GlobalContainer>
            <Wrapper>
                <SliderRender>
                    {imageUrls.map(url => (
                        <ImgLink to={`/movie/${url.id}`} style={{textDecoration: "none"}}>
                            <SliderImage 
                                key={url.id}
                                src={url.url}
                                style={{translate: `${-100 * imageIndex}%`}}/>
                        </ImgLink>
                    ))}
                </SliderRender>
                <SliderButton onClick={showPrevImage} style={{left: 0, paddingRight: "10%"}}>
                    <ArrowBackIosIcon/>
                </SliderButton>
                <SliderButton id="next" onClick={showNextimage} style={{right:0, paddingLeft: "10%"}}>
                    <ArrowForwardIosIcon/>
                </SliderButton>
                <SliderIndex>
                    {imageUrls.map((url, index) => (
                        <SliderDotButtons key={url.id} onClick={() => setIndex(index)}>
                            {index === imageIndex ? <Unselect/> : <Dotselect/>}
                        </SliderDotButtons>
                    ))}
                </SliderIndex>
            </Wrapper>
            <DetailsContainer>
                <MovieTitle>{imageUrls[imageIndex].title}</MovieTitle>
                <MovieDesc>{imageUrls[imageIndex].desc}</MovieDesc>
            </DetailsContainer>
        </GlobalContainer>
    );
}

export default Slider;