import logo from './logo.svg';
import './App.css';
import Products from './Components/Products/Products';
import Modal from './Components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Products/>
        <Modal/>
      </header>
    </div>
  );
}

export default App;
