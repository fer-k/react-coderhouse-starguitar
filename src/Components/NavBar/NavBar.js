import React from 'react'
import './NavBar.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from '../../Containers/Home';
import Cart from '../../Containers/Cart'
import ProductDetailContainer from '../../Containers/ProductDetailContainer'

const NavBar = () => {
    return (
        <div>
        <ul className="nav main-nav justify-content-center">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Productos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/cart" className="nav-link">Carrito</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route exact path="/:id" component={ProductDetailContainer}/>

      </Switch>
      </div>
    )
}

export default NavBar