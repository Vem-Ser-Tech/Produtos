import React, { useState, useEffect } from 'react';
import { Container, Ul, Li } from './styles';
import CardProdutos from '../Card/Card';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://makeup-api.herokuapp.com/api/v1/products.json'
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h1>Lista de Itens</h1>
      <Ul>
        {products.slice(0, 10).map((item, index) => (
          <Li key={index}>
            <CardProdutos product={item}></CardProdutos>
          </Li>
        ))}
      </Ul>
    </Container>
  );
}
