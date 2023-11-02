import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Carousel from "../components/Carousel";
import { COLORS, GlobalBody, GlobalContent, GlobalTitle, GlobalTitleContainer } from "../styles/Global.styles";
import { CarouselContainer, TitleGap, TopContainer, TrendingContainer } from "../styles/Home.styles";

const Home = () => {


    return (
        <GlobalBody>
            <Navbar/>
            <GlobalContent>
                <TrendingContainer>
                    <GlobalTitleContainer>
                        <TitleGap/>&ensp;
                        <GlobalTitle>Trending</GlobalTitle>
                    </GlobalTitleContainer>
                    <div style={{
                        position: "relative",
                        zIndex: "0",
                        maxWidth: "1400px",
                        aspectRatio: "10/6",
                        width: "100%",
                        margin: "0 auto",
                    }}>
                        <Slider/>
                    </div>
                </TrendingContainer>
                <TopContainer>
                    <GlobalTitleContainer>
                        <TitleGap/>&ensp;
                        <GlobalTitle>Top Box Office (2023)</GlobalTitle>
                    </GlobalTitleContainer>
                    <div style={{display: "flex", justifyContent: "center", maxWidth: "100%"}}>
                        <CarouselContainer>
                            <Carousel/>
                        </CarouselContainer>
                    </div>
                </TopContainer>
                <TopContainer>
                    <GlobalTitleContainer>
                        <TitleGap/>&ensp;
                        <GlobalTitle>Fan Favorites</GlobalTitle>
                    </GlobalTitleContainer>
                    <div style={{display: "flex", justifyContent: "center", maxWidth: "100%"}}>
                        <CarouselContainer>
                            <Carousel/>
                        </CarouselContainer>
                    </div>
                </TopContainer>
            </GlobalContent>
        </GlobalBody>
    );
}

export default Home;