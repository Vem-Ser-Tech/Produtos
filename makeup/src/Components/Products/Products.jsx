import React, { useState, useEffect } from 'react';
import {Container, StyledImage, Ul, Li} from './styles'
import SearchProducts from './Search/SearchProducts';

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
        {products.map((item, index) => (
          <Li key={index}>
            <StyledImage src={item.image_link} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Marca: {item.brand}</p>
              <p>Preço: {item.price} {item.currency}</p>
              <p>Descrição: {item.description}</p>
            </div>
          </Li>
        ))}
      </Ul>
    </Container>
  );

}