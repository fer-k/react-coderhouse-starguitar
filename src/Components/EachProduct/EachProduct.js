import React from 'react';
import './EachProduct.css'
import { Link } from 'react-router-dom';

const EachProduct = ({product}) => {
    return (
        <div key={product.id}>
            <img src={product.imageId} className="product-img" alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.guitarrist}</p>
            <p>$ {product.price}</p>
            <Link to={`/${product.id}`}><button>Detalles del Producto</button></Link>
        </div>
    )
}

export default EachProduct