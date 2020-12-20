import React from 'react';
import './EachProduct.css'
import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/CartContext'



const EachProduct = ({product}) => {

    const {addProduct} = useCartContext();

    //muestro los datos del producto y el boton para agregarlos al carrito. Si no tiene stock el boton no se muestra

    return (
        <div key={product.id} className="each-product">
            <img src={product.imageId[0]} className="product-img" alt={product.title} />
            <h2>{product.title}</h2>
            <h3>{product.guitarrist}</h3>
            <p>$ {product.price}</p>
            <Link to={`/${product.id}`}><button className="secondary"><i class="far fa-eye"></i></button></Link>
            {product.stock > 0 ? <button className="primary" onClick={() => addProduct(product)}><i class="fas fa-cart-plus"></i></button> : null}
            <p><span className="light">Stock: {product.stock}</span></p>
        </div>
    )
}

export default EachProduct