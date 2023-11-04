import styled from "styled-components";
import { COLORS } from "./Global.styles";

export const MediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

    height: 405px;
    width: 100%;

    margin-top: 25px;
    padding-top: 1rem;
    padding-bottom: 1rem;

    background: linear-gradient(0.25turn, ${COLORS.light}, ${COLORS.med}, ${COLORS.light});

    @media (max-width: 699px) {
        height: 300px;
        margin-top: 0.5rem;
    }
`

export const PosterContainer = styled.div`
    width: 350px;
    aspect-ratio: 2/3;

    @media (max-width: 699px) {
        display: none;
    }
`

export const Poster = styled.img`
    display: block;
    object-fit: cover;

    height: 100%;
    width: 100%;

    flex-shrink: 0;
    flex-grow: 0;
`

export const Trailer = styled.iframe`
    height: 405px;
    width: 720px;

    border: none;

    @media (max-width: 699px) {
        height: 100%;
    }
`

export const DescCont = styled.div`
    display: flex;
    flex-direction: row;

    width: 80%;

    padding-top: 2rem;

    @media (max-width: 699px) {
        width: 100%;
    }
`

export const DescLeft = styled.div`
    display: flex;
    flex-direction: column;

    height: auto;
    width: 25%;

    padding-left: 12%;

    @media (max-width: 699px) {
        padding-left: 1rem;
    }
`

export const DescRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: auto;
    width: 63%;

    border-left: 2px solid ${COLORS.med};
`

export const DescTitle = styled.h2`
    height: auto;
    width: 60%;

    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 0.25rem;

    border-bottom: 2px solid ${COLORS.med};

    @media (max-width: 699px) {
        padding-left: 0.2rem;
    }
`

export const DescSub = styled.h4`
    padding-left: 2rem;

    cursor: pointer;

    @media (max-width: 699px) {
        font-size: 0.65rem;
        padding-left: 0.2rem;
    }
`