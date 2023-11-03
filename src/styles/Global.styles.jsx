import styled from "styled-components";

export const COLORS = {
    main: '#1B1B1B',
    med: '#252624',
    light: '#0F0F0F',
    sub: '#C75233',
    text: '#FFFFFF',
    offWhite: '#F0F0F0',
    starGold: '#F5C518',
    greenMoney: '#7A9D54',
    blueCalendar: '#A3D3DF',
};

export const GlobalBody = styled.div`
    display: flex;
    justify-content: center;

    position: absolute;
    z-index: -3;

    height: auto;
    min-height: 80vh;
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

    margin-bottom: 300px;
    padding-bottom: 10%;

    background-color: ${COLORS.light};

    @media (min-width: 1920px) {
        max-width: 1920px;
        padding-bottom: 5%;
    }
    @media (max-width: 699px) {
        margin-bottom: 200px;
    }
`

export const GlobalTitleContainer = styled.div`
    display: flex;

    max-width: 100%;

    margin: 1.5rem;
    padding-left: 5rem;

    color: ${COLORS.sub};

    @media (max-width: 699px) {
        margin: 0.5rem;
        padding-left: 1rem;
    }
`

export const GlobalTitle = styled.h1`
    height: fit-content;
    width: fit-content;

    @media (max-width: 699px) {
        font-size: 1.25rem;
    }
`

export const GlobalSubTitleContainer = styled.h2`
    display: flex;

    max-width: 100%;

    margin: 1.5rem;
    padding-left: 5rem;

    color: ${COLORS.offWhite};

    @media (max-width: 699px) {
        margin: 0.5rem;
        padding-left: 1rem;
    }
`

export const GlobalSubTitle = styled.h2`
    height: fit-content;
    width: fit-content;

    color: ${COLORS.offWhite};

    @media (max-width: 699px) {
        font-size: 1rem;
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

    padding-bottom: 1rem;

    @media (max-width: 699px) {
        padding-bottom: 0;
    }
`