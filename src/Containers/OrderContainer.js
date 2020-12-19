import React, {useState} from 'react';
import Title from '../Components/Title/Title'
import { GetDB } from '../Tools/firebaseFactory';
import {useCartContext} from '../Context/CartContext'
import OrderDetailContainer from '../Containers/OrderDetailContainer'
import {useProductsContext} from '../Context/ProductsContext'
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader/Loader'
import { Modal, Button } from 'react-bootstrap';
import '../Components/OrderDetail/OrderDetail.css'

const DB = GetDB();

const OrderContainer = () => {

    const { cartList , totalPrice, setCartAmount, setCartList, setTotalPrice,show, handleClose, handleShow} = useCartContext();
    const {SetLoading, IsLoading } = useProductsContext();
    const [OrderId, setOrderId] = useState(""); 

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
                console.log(`se creó la orden bajo el id: ${id}`);
                setOrderId(`${id}`)                
                handleShow();

            }).catch((error) => {
                console.log("Error buscando prods", error)
            }).finally(() => {
                setCartAmount(0)
                setCartList([])
                setTotalPrice(0)
                updateProduct(newOrder)
                console.log("listo")
                
            })
        };

    
        

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
                //GetAll();
            }))
            .catch((error) => console.log(error))
            .finally(() => {
//                window.location.reload();
                SetLoading(false)
            });
    })

      
    }

    return (
        <div>
          <Title title="Confirmá tu pedido" />
          { IsLoading ? <Loader /> :
                <div className="order-container">
                    <h4>{newOrderTem.cliente.nombre}</h4>
                    {cartList.length > 0 ? <p>El detalle de tu pedido es:</p> : <p>¡Muchas gracias por tu compra!</p>}
                    <ul className="cart-list-container">
                        <OrderDetailContainer />
                        <div className="divider"></div>  
                    </ul>
                    {cartList.length > 0 ? <p>$ {totalPrice}</p> : null}
                    {cartList.length > 0 ? <button className="primary" onClick={postNewOrder}>Confirmar</button> : <Link to={`/`}><button className="secondary">Volver al inicio</button></Link>}
                </div>}

                <div>
                <Modal show={show}>
                    <Modal.Header>
                   {/*  <Modal.Title>Modal heading</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>Se creó la orden bajo el ID: {OrderId}</Modal.Body>
                    <Modal.Footer>
                    <button className="secondary" onClick={() => window.location.reload()}>
                        Close
                    </button>
                  </Modal.Footer>
                </Modal>
            </div>

                
          
        </div>
    )
}

export default OrderContainer