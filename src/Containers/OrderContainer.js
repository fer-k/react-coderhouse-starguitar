import React, {useState} from 'react';
import Title from '../Components/Title/Title'
import { GetDB } from '../Tools/firebaseFactory';
import {useCartContext} from '../Context/CartContext'
import OrderDetail from '../Components/OrderDetail/OrderDetail'
import {useProductsContext} from '../Context/ProductsContext'
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader/Loader'
import { Modal, Button } from 'react-bootstrap';

const DB = GetDB();

const OrderContainer = () => {

    const { cartList , totalPrice, setCartAmount, setCartList, setTotalPrice,show, handleClose, setShow, handleShow} = useCartContext();
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
                <div>
                    <OrderDetail />
          {cartList.length > 0 ? <button onClick={postNewOrder}>Confirmar</button> : <Link to={`/`}><button>Volver al inicio</button></Link>}
                </div>}

                <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                   {/*  <Modal.Title>Modal heading</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>Se creó la orden bajo el id {OrderId}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => window.location.reload()}>
                        Close
                    </Button>
                  </Modal.Footer>
                </Modal>
            </div>

                
          
        </div>
    )
}

export default OrderContainer