import React from 'react';
import OrderDetail from '../Components/OrderDetail/OrderDetail';
import {useCartContext} from '../Context/CartContext'

const OrderDetailContainer = () => {

    const { cartList } = useCartContext();
    
    
    return (

        cartList.map((item, i) => {
            
                
            return <li>
            <OrderDetail prod={item}/>
            </li>
        }
        )
    )
}

export default OrderDetailContainer