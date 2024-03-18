import './App.css';
import Products from './Components/Products/Products';
import React from 'react';
import CarouselComponent from './Components/Carrossel/carrossel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="carousel-container"> 
        <CarouselComponent />
      </div>
    </div>
  );
}

export default App;
