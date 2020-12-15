import React from 'react';
import './EachProduct.css'
import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/CartContext'


const EachProduct = ({product}) => {

    const {addProduct, removeProduct} = useCartContext();

    return (
        <div key={product.id}>
            <img src={product.imageId} className="product-img" alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.guitarrist}</p>
            <p>$ {product.price}</p>
            <Link to={`/${product.id}`}><button>Detalles del Producto</button></Link>
            {product.stock > 0 ? <button onClick={() => addProduct(product)}>Agregar al carrito</button> : <p>Sin Stock</p>}
        </div>
    )
}

export default EachProduct