import React from 'react';
import ProductDetail from '../Components/ProductDetail/ProductDetail'
import {useParams} from 'react-router-dom';
import {useProductsContext} from '../Context/ProductsContext'


const ProductDetailContainer = () => {

    const { SourceProducts } = useProductsContext();
    let { id } = useParams();
    const products = SourceProducts.filter((item) => item.id === id)


    return (
        products.map((item, i) => {
            
            return <div>
            <ProductDetail product={item}/>
            </div>
            
            
        }
        ))}
    
export default ProductDetailContainer