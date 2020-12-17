import React from 'react'
import './Filters.css';
import {useProductsContext} from '../../Context/ProductsContext'

const Filters = () => {

    const {GetAll, GetByCategory} = useProductsContext();

    return (
        <div>
       <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link" onClick={() => GetAll()} href="#">Todas</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={() => GetByCategory("rock")} href="#">Rock</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={() => GetByCategory("punk/metal")} href="#">Punk/Metal</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={() => GetByCategory("blues/jazz/soul")} href="#">Otras</a>
  </li>
</ul>
</div>
    )
}

export default Filters


