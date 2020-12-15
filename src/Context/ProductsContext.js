import React, { createContext , useContext, useState, useEffect} from 'react';
import { GetDB } from '../Tools/firebaseFactory';

export const ProductsContext = createContext();
export const useProductsContext = () => useContext(ProductsContext);

const ProductsContextProvider = ({children}) => {
   
    const [SourceProducts, setProducts] = useState([]);
    
    const DB = GetDB();
    const allProducts = DB.collection("guitars");

    function GetAll () {
        allProducts
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("no resultados pa")
                }
                setProducts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            }).catch((error) => {
                console.log("Error buscando prods", error)
            }).finally(() => {
                console.log("listo")
                console.log(SourceProducts)
            })
    }

    function GetByCategory (category) {
        const filter = allProducts.where("categoryId", "==", category);
    
        filter
          .get()
          .then((result) => {
            if (result.size === 0) {
              console.log("Sin resultados");
            }
    
            setProducts(result.docs.map(doc => ({ ...doc.data(), id: doc.id })))
          })
          .catch((error) => console.log(error))
          .finally(() => {});
    }

    useEffect(() => {
        GetAll();
    },[])

        console.log(SourceProducts.length)

    return (
        <ProductsContext.Provider value={{SourceProducts, setProducts, GetAll, GetByCategory}}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;