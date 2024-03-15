import React, { useState } from 'react';
import { Container, Form, Input, Button } from './styles'; 

const SearchProducts = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?${searchTerm}`);
      const data = await response.json();
      onSearch(data);
    } catch (error) {
      console.error('Erro ao buscar dados da API: ', error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Digite sua pesquisa..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit">Pesquisar</Button>
      </Form>
    </Container>
  );
};

export default SearchProducts;