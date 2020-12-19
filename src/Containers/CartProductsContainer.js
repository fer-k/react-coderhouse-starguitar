import React from 'react';
import {useCartContext} from '../Context/CartContext'
import CartEachProduct from "../Components/CartEachProduct/CartEachProduct"

const ProductsContainer = () => {

    const { cartList } = useCartContext();

    if(cartList.length === 0) {
        return (
            <p>Tu carrito está vacío.</p>
        )
    }
    return (
        cartList.map((item, i) => {
            
                
            return <li>
            <CartEachProduct prod={item}/>
            </li>
        }
        ))
            }

export default ProductsContainer