import React, { Component } from 'react';
import { Container, Text } from './styles';

/*
export class index extends Component {
    render() {
        return (
            <h1> Hello </h1>
        );
    }
}

Stateless:
usar quando não for usado estado no componente
*/

const Header = () => (
    <Container id="main-header"> 
        <Text> JS Hunt </Text>
    </Container>
);

export default Header;