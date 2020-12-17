import React from 'react';
import Title from '../Components/Title/Title'
import ProductsContainer from '../Containers/ProductsContainer'
import Loader from '../Components/Loader/Loader';
import {useProductsContext} from '../Context/ProductsContext'
import Filters from '../Components/Filters/Filters'

const Home = () => {

    const { IsLoading } = useProductsContext();

    return (
        <div>
          <Title title="Productos" />
          <Filters/>
                { IsLoading ? <Loader /> :
                <div className="row">
                    <ProductsContainer />
                </div>}
        </div>
    )
}

export default Home