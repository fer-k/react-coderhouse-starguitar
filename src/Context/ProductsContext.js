import React, { createContext , useContext, useState, useEffect} from 'react';
import { GetDB } from '../Tools/firebaseFactory';

// creacion del contexto
export const ProductsContext = createContext();
export const useProductsContext = () => useContext(ProductsContext);

const ProductsContextProvider = ({children}) => {

    // variables y modificadores

    const [SourceProducts, setProducts] = useState([]);
    const DB = GetDB();
    const allProducts = DB.collection("guitars");
    // modificador para activar el loader
    const [IsLoading, SetLoading] = useState(false);
    // modificador para darle style active la opcion del filtro seleccionada
    const [ActiveFilter, SetActiveFilter] = useState("All");

    // funcion para traer todos los productos de la base de datos
    function GetAll () {
        SetLoading(true)
        allProducts
            .get()
            .then((querySnapshot) => {
                
                if (querySnapshot.size === 0) {
                    console.log("No se encontraron resultados")
                }
                setProducts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                SetLoading(false)
                SetActiveFilter("All")
            }).catch((error) => {
                console.log("Error buscando prods", error)
            }).finally(() => {})
    }

    // funcion para filtrar los productos por categoria
    function GetByCategory (category) {
        SetLoading(true)
        const filter = allProducts.where("categoryId", "==", category);
    
        filter
          .get()
          .then((result) => {
            if (result.size === 0) {
              console.log("Sin resultados");
            }
    
            setProducts(result.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            SetLoading(false)
            SetActiveFilter(category)
          })
          .catch((error) => console.log(error))
          .finally(() => {});
    }

    // disparo getall al iniciar para que traiga los productos de la base de datos
    useEffect(() => {
        GetAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <ProductsContext.Provider value={{SourceProducts, setProducts, GetAll, GetByCategory, SetLoading, IsLoading, ActiveFilter}}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;