import React from 'react';
import './CartEachProduct.css'
import {useCartContext} from '../../Context/CartContext'


const CartEachProduct = ({prod}) => {
    
    const { removeProduct } = useCartContext();
    

    return (
        <div className="cart-item-container">
                <div className="inline product-cart-img-container">
                    <img src={prod.imageId} className="product-cart-img" alt={prod.title} />
                </div>
                <div className="inline text-left cart-info">
                <p >{prod.title} x {prod.amount} = ${prod.price * prod.amount}</p>
                </div>
                <button className="inline secondary" onClick={() => removeProduct(prod)}><i class="fas fa-minus"></i></button>
        </div>    )
        }

export default CartEachProduct