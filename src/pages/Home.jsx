import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import { GlobalBody, GlobalContent, GlobalTitle, GlobalTitleContainer } from "../styles/Global.styles";
import { TopBoxContainer, TrendingContainer } from "../styles/Home.styles";

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
                <TopBoxContainer>
                    <GlobalTitleContainer>
                        <GlobalTitle>Top Box Office (2023)</GlobalTitle>
                    </GlobalTitleContainer>
                </TopBoxContainer>
            </GlobalContent>
        </GlobalBody>
    );
}

export default Home;