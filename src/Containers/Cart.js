import React from 'react';
import Title from '../Components/Title/Title'
import CartProductsContainer from '../Containers/CartProductsContainer'
import {useCartContext} from '../Context/CartContext'
import { Link } from 'react-router-dom';


const Cart = () => {

    const {cartAmount, totalPrice} = useCartContext();

    if (cartAmount > 0) {
      return (
        <div>
          <Title title="Carrito" />
          <CartProductsContainer />
          <p>{totalPrice}</p>
          <Link to={`/orden`}><button>Confirmar Pedido</button></Link>

        </div>
    )
    }
    return (
      <div>
        <p>No tenés ningún producto en el carrito</p>
      </div>
  ) 
    
}

export default Cart