import styled from "styled-components";
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import LensIcon from '@mui/icons-material/Lens';

export const Container = styled.div`
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