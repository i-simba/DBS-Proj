import styled from "styled-components";

export const CardImage = styled.img`
    display: block;
    object-fit: cover;

    height: 100%;
    width: 100%;

    flex-shrink: 0;
    flex-grow: 0;
`

export const CardTitle = styled.h4`
    font-weight: 200;

    padding-left: 0.25rem;
`

export const CardSub = styled.h5`
    font-weight: 100;

    padding-left: 0.25rem;
    padding-bottom: 0.5rem;
`