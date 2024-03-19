import './App.css';
import React from 'react';
import SearchProducts from './Components/Products/Search/SearchProducts';
import CarouselComponent from './Components/Carrossel/carrossel';
import { ProductsProvider } from './Contexts/ProductsContext .jsx';

function App() {
  return (
    <div className="App">
     
      <ProductsProvider>
         <header className="App-header">
          <SearchProducts />
        </header>
        <div className="carousel-container"> 
          <CarouselComponent />
        </div>
      </ProductsProvider>
    </div>
  );
}

export default App;
