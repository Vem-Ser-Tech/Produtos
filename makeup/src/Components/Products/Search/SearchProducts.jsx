import React, { useState, useEffect, useContext } from 'react';
import { Container, Form, Input, Button } from './styles'; 
import ProductsContext from '../../../Contexts/ProductsContext ';

const SearchProducts = ({ onSearch }) => {
  const { updateProducts } = useContext(ProductsContext);
  const [searchTerm, setSearchTerm] = useState('');


  
  useEffect(() => {
    console.log('searchTerm: ',searchTerm);
  }, [ searchTerm]);


  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchTerm}`);
      const data = await response.json();
      updateProducts(data);
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