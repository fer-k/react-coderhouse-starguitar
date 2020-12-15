import logo from './logo.svg';
import './App.css';
import ProductsContextProvider from './Context/ProductsContext'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <div className="App container">
          <img src={logo} className="App-logo" alt="logo" />
          <NavBar />
        </div>
      </ BrowserRouter>
    </ ProductsContextProvider>
  );
}

export default App;
