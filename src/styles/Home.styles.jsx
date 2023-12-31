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

export const TopContainer = styled.div`
    height: auto;
    width: 100%;

    margin-top: 25px;
`

export const CarouselContainer = styled.div`
    height: fit-content;
    width: 75%;
    max-width: 100%;

    padding-bottom: 1rem;

    border-bottom: 2px solid color-mix(in srgb, ${COLORS.light} 90%, white);

    @media (max-width: 699px) {
        width: 95%;
    }
`

export const TitleGap = styled.div`
    height: auto;
    width: 5px;

    background-color: ${COLORS.sub};
`