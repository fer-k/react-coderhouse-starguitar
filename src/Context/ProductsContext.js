import React, { createContext , useContext, useState, useEffect} from 'react';
import { GetDB } from '../Tools/firebaseFactory';

export const ProductsContext = createContext();
export const useProductsContext = () => useContext(ProductsContext);

const ProductsContextProvider = ({children}) => {

    const [SourceProducts, setProducts] = useState([]);
    const DB = GetDB();
    const allProducts = DB.collection("guitars");
    const [IsLoading, SetLoading] = useState(false);
    const [ActiveFilter, SetActiveFilter] = useState("All");




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

    useEffect(() => {
        GetAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

        console.log(SourceProducts.length)

    return (
        <ProductsContext.Provider value={{SourceProducts, setProducts, GetAll, GetByCategory, SetLoading, IsLoading, ActiveFilter}}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;