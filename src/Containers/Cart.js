import React from 'react';
import Title from '../Components/Title/Title'
import CartProductsContainer from '../Containers/CartProductsContainer'
import {useCartContext} from '../Context/CartContext'

const Cart = () => {

    const {totalPrice } = useCartContext();
    return (
        <div>
          <Title title="Carrito" />
          <CartProductsContainer />
          <p>{totalPrice}</p>
        </div>
    )
}

export default Cart