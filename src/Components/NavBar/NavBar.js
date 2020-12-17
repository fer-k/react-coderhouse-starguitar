import React from 'react'
import './NavBar.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from '../../Containers/Home';
import Cart from '../../Containers/Cart'
import OrderContainer from '../../Containers/OrderContainer'
import ProductDetailContainer from '../../Containers/ProductDetailContainer'
import {useCartContext} from '../../Context/CartContext'

const NavBar = () => {

    const {cartAmount} = useCartContext();

    return (
        <div>
        <ul className="nav main-nav justify-content-center">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Productos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/cart" className="nav-link">({cartAmount}) Carrito</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/orden" component={OrderContainer}/>
        <Route exact path="/:id" component={ProductDetailContainer}/>
      </Switch>
      </div>
    )
}

export default NavBar