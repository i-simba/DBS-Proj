import styled from "styled-components";
import { COLORS } from "./Global.styles";

export const FootContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;

    height: 300px;
    width: 100%;

    color: ${COLORS.text};
    background-color: ${COLORS.main};

    border-top: 2px solid ${COLORS.sub};

    @media (max-width: 699px) {
        height: 200px;
    }
`

export const FootWrapper = styled.div`
    display: flex;
    flex-direction: row;

    height: auto;
    width: 90%;
    max-width: 1920px;
`

export const FootColumn = styled.div`
    display: flex;
    flex-direction: column;

    height: auto;
    width: 20%;
`