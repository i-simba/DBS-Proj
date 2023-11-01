import styled from "styled-components";

export const COLORS = {
    main: '#1B1B1B',
    med: '#252624',
    light: '#353634',
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

    margin-top: 60px;
    
    background-color: ${COLORS.light};
`

export const GlobalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    z-index: -2;

    height: calc(100vh - 60px);
    width: 100vw;
    max-width: 1920px;

    background-color: ${COLORS.light};
`