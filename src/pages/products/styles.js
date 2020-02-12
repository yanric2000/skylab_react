import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    border: 1px solid #DDD;
    margin-bottom: 20px;
    margin: 22px 22px 22px 22px;
    padding: 20px;
    list-style: none;
    strong {
        color: #333;
        font-size: 22px;
    }
    p {
        color: #333;
        margin: 12px 0;
        &:last-child{
            margin-bottom: 0;
        }
    }
    a {
        color: #1434A6;
    }
`;
