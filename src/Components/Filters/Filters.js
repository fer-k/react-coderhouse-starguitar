import React from 'react'
import './Filters.css';
import {useProductsContext} from '../../Context/ProductsContext'

const Filters = () => {

    const {GetAll, GetByCategory} = useProductsContext();

    return (
        <div>
       <ul className="nav justify-content-center">
  <li className="nav-item">
    <button className="nav-link" onClick={() => GetAll()}>Todas</button>
  </li>
  <li className="nav-item">
    <button className="nav-link" onClick={() =>GetByCategory("rock")}>Rock</button>
  </li>
  <li className="nav-item">
    <button className="nav-link" onClick={() => GetByCategory("punk/metal")}>Punk/Metal</button>
  </li>
  <li className="nav-item">
    <button className="nav-link" onClick={() => GetByCategory("blues/jazz/soul")}>Otras</button>
  </li>
</ul>
</div>
    )
}

export default Filters


