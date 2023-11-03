import styled from "styled-components";
import { COLORS } from "./Global.styles";

export const CardContainer = styled.div`
    all: unset;

    height: 100%;
    width: 100%;

    color: ${COLORS.text};

    &:hover {
        color: ${COLORS.sub};
    }
`

export const CardTitle = styled.h4`
    font-weight: 200;

    margin-top: 0.05rem;
`

export const CardSub = styled.h5`
    font-weight: 100;

    padding-left: 0.25rem;
    padding-bottom: 0.5rem;
`

export const CardImage = styled.img`
    display: block;
    object-fit: cover;

    height: 100%;
    width: 100%;

    flex-shrink: 0;
    flex-grow: 0;

    cursor: pointer;

    &:hover {
        opacity: 0.85;
    }
`