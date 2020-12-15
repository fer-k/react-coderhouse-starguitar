import logo from './logo.svg';
import './App.css';
import ProductsContextProvider from './Context/ProductsContext'
import CartContextProvider from './Context/CartContext'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <div className="App container">
            <img src={logo} className="App-logo" alt="logo" />
            <NavBar />
          </div>
        </ BrowserRouter>
      </CartContextProvider>
    </ ProductsContextProvider>
  );
}

export default App;
