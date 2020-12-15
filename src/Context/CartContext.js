  
import React, { createContext , useContext, useState} from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({defaultValue = [],children}) => {

    const [cartList, setCartList] = useState(defaultValue);
    /* const [cartCount, setCartCount] = useState(1);
    const [total, setTotal] = useState(0); */

/*     // const getFromCart = id => {
    //     return cartList.find(product => product.id === id);
    // }

    // const isInCart = id => {
    //     return id === undefined ? undefined : getFromCart(id) !== undefined;
    // }


    // const addProduct = (product) => {
    //  setCartList([...cartList, {...product, amount:(1)}])
    // }
 */
    return (
        <CartContext.Provider
            value={{}}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;