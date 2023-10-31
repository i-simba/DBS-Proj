import styled from "styled-components";

export const COLORS = {
    main: '#1B1B1B',
    light: '#353634',
    sub: '#C75233',
    text: '#FFFFFF',
    offWhite: '#F0F0F0',
};

export const GlobalBody = styled.div`
    display: flex;
    justify-content: center;

    height: calc(100vh - 60px);
    width: 100vw;

    margin-top: 60px;
    
    background-color: ${COLORS.light};
`

export const GlobalContent = styled.div`
    height: calc(100vh - 60px);
    width: 100vw;
    max-width: 1920px;

    background-color: ${COLORS.light};
`