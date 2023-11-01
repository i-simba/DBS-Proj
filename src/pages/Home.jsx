import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import { GlobalBody, GlobalContent } from "../styles/Global.styles";
import { TrendingContainer } from "../styles/Home.styles";

const Home = () => {


    return (
        <GlobalBody>
            <Navbar/>
            <GlobalContent>
                <TrendingContainer>
                    <div style={{
                        position: "relative",
                        zIndex: "0",
                        maxWidth: "1300px",
                        aspectRatio: "10/6",
                        width: "100%",
                        margin: "0 auto",
                    }}>
                        <Slider/>
                    </div>
                </TrendingContainer>
            </GlobalContent>
        </GlobalBody>
    );
}

export default Home;