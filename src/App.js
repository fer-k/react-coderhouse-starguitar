import logo from './logo.svg';
import './App.css';
import ProductsContextProvider from './Context/ProductsContext'
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <ProductsContextProvider>
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      <NavBar />
    </div>
    </ ProductsContextProvider>
  );
}

export default App;
