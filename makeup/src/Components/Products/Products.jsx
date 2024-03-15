import React, { useState, useEffect } from 'react';
import {Container, StyledImage, Ul, Li} from './styles'
import SearchProducts from './Search/SearchProducts';
import CardProdutos from '../Card/Card';

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 
  

  const handleSearch = (searchResults) => {
    setProducts(searchResults); // Atualiza o estado dos produtos com os resultados da pesquisa
  };

  return (
    <Container>
      <div>
        <SearchProducts onSearch={handleSearch}/>
      </div>

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
