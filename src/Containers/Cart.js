import React from 'react';
import Title from '../Components/Title/Title'
import CartProductsContainer from '../Containers/CartProductsContainer'
import {useCartContext} from '../Context/CartContext'
import { Link } from 'react-router-dom';


const Cart = () => {

  // variables traidas del cart context
    const {cartAmount, totalPrice} = useCartContext();

    // si el  carrito tiene productos mostrar:
    if (cartAmount > 0) {
      return (
        <div>
          <Title title="Carrito" />
          <ul className="cart-list-container">
            <CartProductsContainer />
            <div className="divider"></div>
          </ul>
          <h4>$ {totalPrice}</h4>
          <Link to={`/orden`}><button className="primary">Confirmar Pedido</button></Link>

        </div>
    )
    }
    // si el carrito no tiene productos mostrar:
    return (
      <div>
          <Title title="Carrito" />
        <div className="detail-container">
        <p>No tenés ningún producto en el carrito</p>
        </div>
      </div>
  ) 
    
}

export default Cart