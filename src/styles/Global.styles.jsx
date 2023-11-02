import styled from "styled-components";

export const COLORS = {
    main: '#1B1B1B',
    med: '#252624',
    light: '#0F0F0F',
    sub: '#C75233',
    text: '#FFFFFF',
    offWhite: '#F0F0F0',
};

export const GlobalBody = styled.div`
    display: flex;
    justify-content: center;

    position: absolute;
    z-index: -3;

    height: auto;
    width: 100vw;
    max-width: 100%;

    margin-top: 60px;
    
    background-color: ${COLORS.light};
`

export const GlobalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    z-index: -2;

    height: auto;
    width: 100vw;
    max-width: 100%;

    background-color: ${COLORS.light};

    @media (min-width: 1920px) {
        max-width: 1920px;
    }
`

export const GlobalTitleContainer = styled.div`
    display: block;

    max-width: 100%;

    margin: 1.5rem;
    padding-left: 5rem;

    color: ${COLORS.sub};

    @media (max-width: 699px) {
        margin: 0.5rem;
        padding-left: 0.5rem;
    }
`

export const GlobalContainer = styled.div`
    all: unset;

    height: 100%;
    width: 100%;

    color: ${COLORS.text};
`

export const GlobalCardContainer = styled.div`
    height: auto;
    width: 250px;

    background-color: ${COLORS.med};
`

export const GlobalTitle = styled.h1`
    height: fit-content;
    width: fit-content;

    @media (max-width: 699px) {
        font-size: 1.25rem;
    }
`