import styled from "styled-components";



export const Container = styled.div`

    height: 100vh;
    background: #011627;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;

`


export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-width: 500px;

`



export const ContainerInputs = styled.div`

    display: flex;
    gap: 20px;

`

export const Input = styled.input`

    width: 100%;
    border: 1px solid #ded4d4;
    border-radius: 15px;
    background: #fff;
    padding: 12px 20px;
    outline: none;

`

export const InputLabel = styled.label`

    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin: 0.5rem;

    span {
        color: #ff0000;
        font-weight: bold;
    }

`
