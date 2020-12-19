import React from 'react'
import './Filters.css';
import {useProductsContext} from '../../Context/ProductsContext'

const Filters = () => {



  const {GetAll, GetByCategory, ActiveFilter} = useProductsContext();


  // al dispararl las funciones getall y getby category seteo el valor de active filter la opcion que corresponda para que el boton elegido se coloree (style active)
  return (
    <div>
      <ul className="nav justify-content-center filters">
        <li className="nav-item">
          {ActiveFilter === "All" ? <button className="nav-link filter active" onClick={() => GetAll()}>Todas</button> :
          <button className="nav-link filter" onClick={() => GetAll()}>Todas</button>}
        </li>
        <li className="nav-item">
          {ActiveFilter === "rock" ? <button className="nav-link filter active " onClick={() =>GetByCategory("rock")}>Rock</button> :
          <button className="nav-link filter" onClick={() =>GetByCategory("rock")}>Rock</button>}
        </li>
        <li className="nav-item">
          {ActiveFilter === "punk/metal" ? <button className="nav-link filter active" onClick={() => GetByCategory("punk/metal")}>Punk/Metal</button> :
          <button className="nav-link filter" onClick={() => GetByCategory("punk/metal")}>Punk/Metal</button>}
        </li>
        <li className="nav-item">
          {ActiveFilter === "blues/jazz/soul" ? <button className="nav-link filter active" onClick={() => GetByCategory("blues/jazz/soul")}>Otras</button> :
          <button className="nav-link filter" onClick={() => GetByCategory("blues/jazz/soul")}>Otras</button>}
        </li>
      </ul>
    </div>
  )
}

export default Filters


