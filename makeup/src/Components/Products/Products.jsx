import React, { useState, useEffect, useContext  } from 'react';
import {Container, StyledImage, Ul, Li} from './styles'
import SearchProducts from './Search/SearchProducts';
import CardProdutos from '../Card/Card';
import ProductsContext from '../../Contexts/ProductsContext ';


export default function Products({onProductClick}) {
  const { products } = useContext(ProductsContext);
  

  return (
    <Container>
      <div>
        <SearchProducts />
      </div>

      <h1>Lista de Itens</h1>

      <Ul>
        {products.slice(0, 10).map((item, index) => (
          <Li key={index}>
            <CardProdutos product={item} onClick={() => onProductClick(item)} />
          </Li>
        ))}
      </Ul>
    </Container>
  );

}