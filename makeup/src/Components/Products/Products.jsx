import React, { useState, useEffect } from 'react';

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
        <div>
            <h1>Lista de Itens</h1>
            <ul>
                {products.map((item, index) => (
                    <li key={index}>
                        <img src={item.image_link} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>Marca: {item.brand}</p>
                            <p>Preço: {item.price} {item.currency}</p>
                            <p>Descrição: {item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );

}