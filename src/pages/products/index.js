import React, { Component } from 'react';
import Api from '../../services/api';
import { Container } from './styles';

class Product extends Component {

    state = {
        product: [],
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await Api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;

        return (
            <Container>
                <strong> { product.title } </strong>
                <p> { product.description } </p>
                <p>
                    URL: <a href={product.url}> { product.url } </a>
                </p>
            </Container>
        );
    }
}

export default Product;
