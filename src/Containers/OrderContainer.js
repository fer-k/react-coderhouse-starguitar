import React from 'react';
import Title from '../Components/Title/Title'
import { GetDB } from '../Tools/firebaseFactory';
import {useCartContext} from '../Context/CartContext'
import OrderDetail from '../Components/OrderDetail/OrderDetail'
import {useProductsContext} from '../Context/ProductsContext'
import { Link } from 'react-router-dom';

const DB = GetDB();

const OrderContainer = () => {

    const { cartList , totalPrice, setCartAmount, setCartList, setTotalPrice} = useCartContext();
    const {GetAll , SetLoading} = useProductsContext();

    const newOrderTem = {
        cliente:{nombre:"Roberto", telefono:"123 456 7890", email:"rober@mail.com",},
        items: cartList,
        precio:totalPrice,
    }

    const newOrder = {...newOrderTem}
    
    function postNewOrder() {
        const orders = DB.collection("orders");
        orders
            .add(newOrder)
            .then(({ id }) => {
                alert(`se creó la orden bajo el id: ${id} pa`)
            }).catch((error) => {
                console.log("Error buscando prods", error)
            }).finally(() => {
                setCartAmount(0)
                setCartList([])
                setTotalPrice(0)
                updateProduct(newOrder)
                GetAll();
                console.log("listo")
            })
    }

    function updateProduct() {
        newOrder.items.forEach((prod, index) => {
            SetLoading(true)
            const productToUpdate = DB.collection("guitars").doc(prod.id);

            productToUpdate
            .get()
            .then((doc =>{
                if(!doc.exists) {
                    console.log('sin resultados')
                }
                const returnedProduct = doc.data();
                productToUpdate.update({stock: returnedProduct.stock - prod.amount})
            }))
            .catch((error) => console.log(error))
           .finally(() => {SetLoading(false)});
    })

      
    }

    return (
        <div>
          <Title title="Confirmá tu pedido" />
          <OrderDetail />
          {cartList.length > 0 ? <button onClick={postNewOrder}>Confirmar</button> : <Link to={`/`}><button onClick={GetAll}>Volver al inicio</button></Link>}
        </div>
    )
}

export default OrderContainer