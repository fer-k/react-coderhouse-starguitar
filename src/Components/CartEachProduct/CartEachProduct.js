import React from 'react';
import './CartEachProduct.css'
import {useCartContext} from '../../Context/CartContext'


const CartEachProduct = ({prod}) => {
    
    const { removeProduct } = useCartContext();
    

    return (
        <div>
            <li>
                <img src={prod.imageId} className="product-cart-img" alt={prod.title} />
                <p>{prod.title} x {prod.amount}</p>
                <p>$ {prod.price * prod.amount}</p>
            </li>
            <button onClick={() => removeProduct(prod)}>Quitar del carrito</button>

            </div>
    )
        }

export default CartEachProduct