import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background: #011627;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    gap: 1.5rem;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;    
    }
`


export const CardUsers = styled.div`
    max-width: 400px;
    background: #252d48;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 20px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 0.1rem;
    }

    h3 {
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        text-transform: capitalize;
        margin-bottom: 0.2rem;
    }

    p{
        color: #fff;
        font-size: 14px;
        font-weight: 400;
    }
`


export const TrashIcon = styled.img`
    padding-left: 4rem;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 0.8;
    }
`


export const AvatarUser = styled.img`
    max-width: 3rem;
`