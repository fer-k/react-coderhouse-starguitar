import React from 'react';
import Title from '../Components/Title/Title'
import ProductsContainer from '../Containers/ProductsContainer'
import Loader from '../Components/Loader/Loader';
import {useProductsContext} from '../Context/ProductsContext'
import {useCartContext} from '../Context/CartContext'
import Filters from '../Components/Filters/Filters'
import { Modal } from 'react-bootstrap';


const Home = () => {

    const { IsLoading } = useProductsContext();
    const {  show, handleClose} = useCartContext();

// Mostrar productos + Modal si es que los productos en el carrito igualaron al stock disponible
    return (
        <div>
            <Title title="Productos" />
            <Filters/>
            { IsLoading ? <Loader /> :
            <div className="row">
                <ProductsContainer />
                <div>
                    <Modal show={show} onHide={handleClose}>
                       <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>No hay más stock disponible para agregar.</Modal.Body>
                        <Modal.Footer>
                            <button className="secondary" onClick={handleClose}>Cerrar</button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>}
        </div>
    )
}

export default Home