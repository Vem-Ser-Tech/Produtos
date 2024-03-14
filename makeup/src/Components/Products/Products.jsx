import React, { useState, useEffect } from 'react';
import {Container, StyledImage, Ul, Li} from './styles'


export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
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
