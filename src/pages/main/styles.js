import styled from 'styled-components';

export const ProductList = styled.div`
    max-width: 700px;
    margin: 20px auto 0;
    padding: 0 20px;
`;

export const ProductItem = styled.li`
    background-color: #FFF;
    border: 1px solid #DDD;
    margin-bottom: 20px;
    padding: 20px;
    list-style: none;
    strong {
        font-size: 22px;
    }
    p {
        font-size: 16px;
        margin: 12px 0;
    }
    a {
        align-items: center;
        background-color: transparent;
        border: 2px solid #DA552F;
        border-radius: 5px;
        color: #DA552F;
        display: flex;
        flex-flow: wrap;
        font-size: 16px;
        font-weight: bold;
        height: 42px;
        justify-content: center;
        text-decoration: none;
        transition: color 0.2s, background-color 0.2s;
        &:hover{
            background-color: #DA552F;
            color: #FFF;
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 660px;
`;

export const Button = styled.button`
    align-items: center;
    background-color: #DA552F;
    border: 0;
    border-radius: 5px;
    color: #FFF;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: bold;
    justify-content: center;
    padding: 16px;
    transition: background-color 0.2s, color 0.2s;
    width: 130px;
    &:hover{
        background-color: rgba(218, 85, 47, 0.8);
        color: rgba(255, 255, 255, 0.8);
    }
    &[disabled]{
        background-color: #DA552F !important;
        cursor: default !important;
        opacity: 0.5 !important;
    }
`;