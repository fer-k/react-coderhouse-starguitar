import React from 'react';
import Title from '../Components/Title/Title'
import ProductsContainer from '../Containers/ProductsContainer'
import Loader from '../Components/Loader/Loader';
import {useProductsContext} from '../Context/ProductsContext'

const Home = () => {

    const { IsLoading } = useProductsContext();

    return (
        <div>
          <Title title="Productos" />
                { IsLoading ? <Loader /> :
                <div className="row">
                    <ProductsContainer />
                </div>}
        </div>
    )
}

export default Home