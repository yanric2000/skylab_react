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
