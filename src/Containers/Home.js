import React from 'react';
import Title from '../Components/Title/Title'
import ProductsContainer from '../Containers/ProductsContainer'
import Loader from '../Components/Loader/Loader';
import {useProductsContext} from '../Context/ProductsContext'
import {useCartContext} from '../Context/CartContext'
import Filters from '../Components/Filters/Filters'
import { Modal, Button } from 'react-bootstrap';


const Home = () => {

    const { IsLoading } = useProductsContext();
    const {  show, handleClose} = useCartContext();


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
                   {/*  <Modal.Title>Modal heading</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>No hay más stock disponible para agregar.</Modal.Body>
                    <Modal.Footer>
                    <Button className="secondary" onClick={handleClose}>
                        Close
                    </Button>
                  </Modal.Footer>
                </Modal>
            </div>
                </div>}
        </div>
    )
}

export default Home