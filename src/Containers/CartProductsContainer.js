import React from 'react';
import {useCartContext} from '../Context/CartContext'
import CartEachProduct from "../Components/CartEachProduct/CartEachProduct"

const ProductsContainer = () => {

    const { cartList } = useCartContext();
// si el carrito está vacio
    if(cartList.length === 0) {
        return (
            <p>Tu carrito está vacío.</p>
        )
    }
    return (
        // sino mostrar los productos
        cartList.map((item, i) => {
            return <li>
                <CartEachProduct prod={item}/>
            </li>
        })
    )
}

export default ProductsContainer