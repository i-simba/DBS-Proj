import styled from "styled-components";
import { COLORS } from "./Global.styles";

export const TrendingContainer = styled.div`
    height: auto;
    width: 100%;

    @media (max-width: 699px) {
        padding-top: 0px;
        padding-bottom: 10px;
    }
`

export const TopBoxContainer = styled.div`
    height: auto;
    width: 100%;
`

export const CarouselContainer = styled.div`
    height: 465px;
    width: 75%;
    max-width: 100%;

    @media (max-width: 699px) {
        width: 85%;
    }
`