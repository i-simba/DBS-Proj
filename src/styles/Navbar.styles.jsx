import styled from "styled-components";
import { COLORS } from "./Global.styles";

export const Container = styled.div`
    position: fixed;
    top: 0;

    display: flex;
    justify-content: center;

    height: 60px;
    width: 100%;

    color: ${COLORS.text};
    background-color: ${COLORS.main};
    filter: drop-shadow(black 1px 1px 5px);
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    z-index: 999;

    height: 60px;
    width: 90%;
    max-width: 1920px;

    background-color: ${COLORS.main};
`

export const Left = styled.div`
    display: flex;
    align-items: center;
`

export const Center = styled.div`

`

export const Right = styled.div`
    padding-left: 20px;

    border-left: 1px solid gray;

    @media (max-width: 699px) {
        padding-left: 5px;
    }
`

export const NavLabel = styled.label`
    font-size: 95%;
    cursor: pointer;
`

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 8px;
    padding: 5px;
    padding-left: 0;

    color: ${COLORS.offWhite};
    background-color: ${COLORS.sub};

    border: 2px solid ${COLORS.sub};
    border-radius: 5px;

    cursor: pointer;
    transition: 0.15s;

    &:hover {
        background-color: color-mix(in srgb, ${COLORS.sub} 80%, black);
        border-color: color-mix(in srgb, ${COLORS.sub} 80%, black);
    }
    &:active {
        background-color: color-mix(in srgb, ${COLORS.sub} 90%, white);
    }
    @media (max-width: 699px) {
        h4 {
            display: none;
        }
        padding: 5px;
        padding-left: 3px;
    }
`

export const Menu = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Franklin Gothic;
    font-size: 100%;

    height: 30px;

    color: ${COLORS.offWhite};
    background-color: ${COLORS.main};

    border: 2px solid ${COLORS.main};
    border-radius: 5px;

    cursor: pointer;
    transition: 0.15s;

    &:hover {
        background-color: color-mix(in srgb, ${COLORS.main} 90%, white);
        border-color: color-mix(in srgb, ${COLORS.main} 90%, white);
    }
    &:active {
        background-color: color-mix(in srgb, ${COLORS.main} 90%, black);
    }
    @media (max-width: 699px) {
        label {
            display: none;
        }
    }
`

export const ExpandingMenu = styled.div`
    display: flex !important;
    justify-content: center;

    position: fixed;
    left: 0;
    z-index: 999;

    width: 100%;

    margin-top: 60px;

    background-color: color-mix(in srgb, ${COLORS.main} 85%, white);

    transition: 0.15s;
`

export const ExpandingChild = styled.div`
    flex-direction: row;

    height: 20vh;
    width: 90%;
    max-width: 1920px;

    padding-top: 10px;
    padding-left: 13vw;
`

export const MenuChild = styled.div`
    display: flex;
    flex-direction: column;

    height: calc(100% - 15px);
    width: 20%;

    margin-left: 50px;

    border-right: 2px solid gray;

    @media (max-width: 699px) and (min-width: 100px) {
        width: 35%;
        margin-left: 15px;
    }
`

export const MenuTitle = styled.h2`
    margin-bottom: 10px;

    color: ${COLORS.offWhite};
`

export const MenuSelection = styled.button`
    font-size: 125%;
    text-align: left;
    text-decoration: none;

    width: 125px;

    padding-left: 30px;

    color: ${COLORS.offWhite};
    background-color: color-mix(in srgb, ${COLORS.main} 85%, white);

    border: none;

    cursor: pointer;
    transition: 0.15s;

    &:hover {
        text-decoration: underline;
        text-shadow: 0px 0px 5px gray;
    }
    @media (max-width: 699px) {
        font-size: 98%;
        width: 50px;
        padding-left: 0px;
    }
`