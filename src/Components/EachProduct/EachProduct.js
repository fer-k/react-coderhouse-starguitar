import React from 'react';
import './EachProduct.css'
import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/CartContext'
import { Modal, Button } from 'react-bootstrap';



const EachProduct = ({product}) => {

    const {addProduct, show, handleClose} = useCartContext();

    return (
        <div key={product.id}>
            <img src={product.imageId[0]} className="product-img" alt={product.title} />
            <h2>{product.title}</h2>
            <h3>{product.guitarrist}</h3>
            <p>$ {product.price}</p>
            <Link to={`/${product.id}`}><button className="secondary"><i class="far fa-eye"></i></button></Link>
            {product.stock > 0 ? <button className="primary" onClick={() => addProduct(product)}><i class="fas fa-cart-plus"></i></button> : null}
            <p>Stock: {product.stock}</p>
            
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                   {/*  <Modal.Title>Modal heading</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>No hay más stock disponible para agregar.</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                  </Modal.Footer>
                </Modal>
            </div>

        </div>
    )
}

export default EachProduct