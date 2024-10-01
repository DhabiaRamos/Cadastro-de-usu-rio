import styled from "styled-components";

export const Button = styled.button`

    width: fit-content;
    color: ${props => props.theme === "primary" ? "#1d1717" : "#fff"};
    background: ${props => props.theme === "primary" ? "linear-gradient(100deg, #9EE37D 0%, #AAEFDF 100%)" : "transparent"};
    border: ${props => props.theme === "primary" ? "none" : "solid 1px #AAEFDF"} ;
    border-radius: 5px;
    padding: 16px 32px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;


    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

`