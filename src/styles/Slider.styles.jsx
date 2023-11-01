import styled from "styled-components";
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import LensIcon from '@mui/icons-material/Lens';
import { COLORS } from "./Global.styles";

export const Container = styled.div`
    all: unset;

    height: 100%;
    width: 100%;

    color: ${COLORS.text};
`

export const Wrapper = styled.div`
    position: relative;
    z-index: -1;

    height: 100%;
    width: 100%;
`

export const SliderRender = styled.div`
    display: flex;
    overflow: hidden;

    position: relative;
    z-index: -1;

    height: 100%;
    width: 100%;
`

export const SliderImage = styled.img`
    display: block;
    object-fit: cover;

    position: relative;
    z-index: -1;

    height: 100%;
    width: 100%;

    flex-shrink: 0;
    flex-grow: 0;

    transition: translate 300ms ease-in-out;
`

export const SliderButton = styled.button`
    all: unset;
    display: block;

    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;

    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;

    &:hover {
        background-color: rgb(0, 0, 0, 0.3);

        > * {
            filter: drop-shadow(white 1px 1px 8px);
            transform: scale(1.5);
            transition: 0.15s;
        }
    }
    & > * {
        color: white;

        height: 2rem;
        width: 2rem;
    }
`

export const SliderIndex = styled.div`
    display: flex;
    
    position: absolute;
    bottom: 0.95rem;
    left: 50%;
    
    translate: -50%;
    
    gap: 0.85rem;
`

export const SliderDotButtons = styled.button`
    all: unset;
    display: block;

    height: 1rem;
    width: 1rem;

    cursor: pointer;
    transition: 0.15s ease-in-out;

    &:hover {
        scale: 1.2;
    }
    & > * {
        stroke: #AAAAAA;
        color: white;

        height: 80%;
        width: 80%;
    }
`

export const Dotselect = styled(TripOriginIcon)`
    @media (max-width: 699px) {
        scale: 0.5;
    }
`

export const Unselect = styled(LensIcon)`
    @media (max-width: 699px) {
        scale: 0.5;
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    aspect-ratio: 10/2;

    padding-top: 10px;
    padding-bottom: 0.75rem;

    border-bottom: 2px solid gray;

    background: linear-gradient(to top, ${COLORS.main}, 35%, ${COLORS.light});

    @media (max-width: 699px) {
        border-bottom: 1px dashed gray;
    }
`

export const MovieTitle = styled.h1`
    font-size: 3rem;

    margin-left: 4rem;
    margin-bottom: 1rem;

    @media (max-width: 699px) {
        font-size: 1rem;
        margin-left: 2rem;
        margin-bottom: 0.3rem;
    }
`

export const MovieDesc = styled.p`
    font-size: 1.5rem;
    font-style: italic;

    margin-left: 2rem;

    @media (max-width: 699px) {
        font-size: 0.75rem;
        margin-left: 1rem;
    }
`