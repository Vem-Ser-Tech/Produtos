import React, { createContext, useState, useEffect } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const updateProducts = (searchResults) => {
    setProducts(searchResults);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <ProductsContext.Provider value={{ products, updateProducts }}>{children}</ProductsContext.Provider>;
};

export default ProductsContext;