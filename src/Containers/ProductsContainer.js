import React from 'react';
import {useProductsContext} from '../Context/ProductsContext'
import EachProduct from "../Components/EachProduct/EachProduct"

const ProductsContainer = () => {

    const { SourceProducts } = useProductsContext();
    
// Recorro los productos en el carrito y cargo sus datos en el componenete eachproducts  
    return (
        SourceProducts.map((item, i) => {
            return <div className="col-md-3">
                <EachProduct product={item}/>
            </div>
    })
        )
}

export default ProductsContainer