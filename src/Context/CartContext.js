  
import React, { createContext , useContext, useState} from 'react';


// creacion del contexto
export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {

    // variables y modificadores
    const [cartList, setCartList] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

// modificador para abrir y cerrar los modales
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

//Obtener id del Producto en el carrito, si esta
    const getFromCart = id => {
        return cartList.find(product => product.id === id);
    }

//Funcion para agregar productos al carrito
const addProduct = (product) => {

//chequear si el producto esta en el carrito
    const productInCart = getFromCart(product.id)
    if(!!productInCart) {
        //esta en el carrito
        if(product.stock > productInCart.amount) {
            setCartList(
                cartList.map((p) => p.id === product.id ? {...p, amount: p.amount + 1} : p )
            );
        } else {
            // si se alcanzo el stock de productos disponibles abrir el modal con el mensaje y cortar la ejecucion de la funcion
            setShow(true)
            return
        }
    } else {
        // el producto no esta en el carrito // agregarlo y agregarle la propiedad amount = 1
        setCartList(cartList.concat([{...product, amount: (1)}]));
    }

    //updatear precio y cantidad de items en el carrito
    setTotalPrice(totalPrice + product.price)
    setCartAmount(cartAmount + 1)
}

// Funcion para eliminar productos del carrito
const removeProduct = (product) => {

    //chequear si el producto esta en el carrito
    const productInCart = getFromCart(product.id)
    if(productInCart.amount > 1) {
        // si el producto tiene mas de 2 unidades restarle 1
        console.log('hay mas de uno')
        setCartList(
            cartList.map((p) => p.id === product.id ? {...p, amount: p.amount - 1 } : p )
        );
        // si tiene 1 quitarlo del carrito
    } else {
        setCartList(cartList.filter(p => p.id !== product.id))
    }

    //updatear precio y cantidad de items en el carrito
    setTotalPrice(totalPrice - product.price)
    setCartAmount(cartAmount - 1)
}

    return (
        <CartContext.Provider value={{addProduct, totalPrice , cartAmount, removeProduct, cartList,setCartAmount, setCartList, setTotalPrice, show, handleClose, handleShow}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;