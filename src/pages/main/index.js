import React, { Component, useState } from 'react';
import Api from '../../services/api';
import { ProductList, ProductItem } from './styles';

class Main extends Component {
    
    // Variável do próprio React
    state = {
        products: [],
    }

    // Métodos que pertencem ao react
    componentDidMount() {
        this.loadProducts();
    }

    // Minha função, named functions conseguem se referenciar a classe
    loadProducts = async () => {
        const response = await Api.get('/products');
        // Método para atualizar o estado,
        // Isso remonta o componente sempre que atualizado
        this.setState({ products: response.data.docs });
    }

    render() {
        const { products } = this.state;

        return (
            <ProductList>
                { products.map(product => (
                    <ProductItem key={product._id}>
                        <strong>
                            {product.title}
                        </strong>
                        <p>
                            {product.description}
                        </p>
                        <a>
                            Acessar
                        </a>
                    </ProductItem>
                ))}
            </ProductList>
        );
    }
}

export default Main;