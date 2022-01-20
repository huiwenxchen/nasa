import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"

export const Container = styled.div`
    height: 100px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: pink;

`

export const NavLink = styled(Link).attrs()`
    font-size: 18px;
    color: gray;
    margin: 0 20px;
    text-decoration: none;
    font-family: monospace;
    letter-spacing: 5px;


    &:hover{
        color: beige;
        text-shadow: 0 0 20px #FF0000, 0 0 20px #0000FF;
    }
`