import React, { Component, useState } from 'react';
import Api from '../../services/api';
import { ProductList, ProductItem, ButtonsContainer, Button } from './styles';

class Main extends Component {
    
    // Variável do próprio React
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    // Métodos que pertencem ao react
    componentDidMount() {
        this.loadProducts();
    }

    // Minha função, named functions conseguem se referenciar a classe
    loadProducts = async (page = 1) => {
        const response = await Api.get(`/products?page=${page}`);
        // Método para atualizar o estado,
        // Isso remonta o componente sempre que atualizado
        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    }

    prevPage = () => {
        const { page } = this.state;

        console.log(page);

        if(page === 1) return;
        
        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if(page === productInfo.pages) return;
        
        const pageNumber = page + 1;
        productInfo.pages = pageNumber;

        this.loadProducts(pageNumber);
    }

    render() {
        const { products, page, productInfo } = this.state;

        return (
            <>
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
                <ButtonsContainer>
                    <Button disabled={page === 1} onClick={this.prevPage} > Anterior </Button>
                    <Button disabled={page === productInfo.pages} onClick={this.nextPage}> Próximo </Button>
                </ButtonsContainer>
            </>
        );
    }
}

export default Main;