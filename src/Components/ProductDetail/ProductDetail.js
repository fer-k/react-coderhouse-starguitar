import React from 'react';
import {useCartContext} from '../../Context/CartContext'
import './ProductDetail.css'
import { Modal, Button } from 'react-bootstrap';


const ProductDetail = ({product}) => {

    const {addProduct, show, handleClose} = useCartContext();

    return (
        <div key={product.id} className="row detail-container">
            <div className="col-md-6 detail-img">
                <img src={product.imageId[1]} className="detail-img" alt={product.title} />
            </div>
            <div className="col-md-6 detail-info">
            <h1>{product.title}</h1>
            <h3>{product.guitarrist}</h3>
            <p>$ {product.price}</p>
            <span className="light">Stock: {product.stock}</span>
            <div className="divider"></div>
            <p>{product.description}</p>
            {product.stock > 0 ? <button className="primary" onClick={() => addProduct(product)}><i class="fas fa-cart-plus"></i></button> : null}

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
        </div>
    )       
            
}
    
export default ProductDetail