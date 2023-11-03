import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Carousel from "../components/Carousel";
import { GlobalBody, GlobalContent, GlobalTitle, GlobalSubTitle, GlobalTitleContainer } from "../styles/Global.styles";
import { CarouselContainer, TitleGap, TopContainer, TrendingContainer } from "../styles/Home.styles";

const Home = () => {


    return (
        <GlobalBody>
            <Navbar/>
            <GlobalContent>
                <TrendingContainer>
                    <GlobalTitleContainer>
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
                        <GlobalTitle>Top Box Office (2023)</GlobalTitle>
                    </GlobalTitleContainer>
                    <div style={{display: "flex", justifyContent: "center", maxWidth: "100%"}}>
                        <CarouselContainer>
                            <Carousel caller={"topBox"}/>
                        </CarouselContainer>
                    </div>
                </TopContainer>
                <TopContainer>
                    <GlobalTitleContainer>
                        <TitleGap/>&ensp;
                        <GlobalSubTitle>Fan Favorites</GlobalSubTitle>
                    </GlobalTitleContainer>
                    <div style={{display: "flex", justifyContent: "center", maxWidth: "100%"}}>
                        <CarouselContainer>
                            <Carousel caller={"fanFav"}/>
                        </CarouselContainer>
                    </div>
                </TopContainer>
                <TopContainer>
                    <GlobalTitleContainer>
                        <TitleGap/>&ensp;
                        <GlobalSubTitle>Top Picks this Month</GlobalSubTitle>
                    </GlobalTitleContainer>
                    <div style={{display: "flex", justifyContent: "center", maxWidth: "100%"}}>
                        <CarouselContainer>
                            <Carousel caller={"topMonth"}/>
                        </CarouselContainer>
                    </div>
                </TopContainer>
                <TopContainer>
                    <GlobalTitleContainer>
                        <TitleGap/>&ensp;
                        <GlobalSubTitle>Born this Month</GlobalSubTitle>
                    </GlobalTitleContainer>
                    <div style={{display: "flex", justifyContent: "center", maxWidth: "100%"}}>
                        <CarouselContainer>
                            <Carousel caller={"person"}/>
                        </CarouselContainer>
                    </div>
                </TopContainer>
            </GlobalContent>
            <Footer/>
        </GlobalBody>
    );
}

export default Home;