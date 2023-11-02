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
    height: fit-content;
    width: 75%;
    max-width: 100%;

    border-bottom: 2px solid color-mix(in srgb, ${COLORS.light} 90%, white);

    @media (max-width: 699px) {
        width: 85%;
    }
`