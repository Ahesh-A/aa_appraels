import { createContext, useState, useEffect } from "react";
//import PRODUCT from '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/Data/shop-data.json';
import { addCollectionAndDocuments } from "../utils/firebase/firebse.utils";

import { getCategoriesAndDocs } from "../utils/firebase/firebse.utils";

import  SHOP_DATA from '../Data/shop-data';

export const ProductContext = createContext({
    product: [],
    setProduct: () => null
});


export const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState([]);
    const value = { product, setProduct };
    useEffect(() => {
        //addCollectionAndDocuments('categories',SHOP_DATA);
        const getCategoriesMap = async () =>{
            const categoryMap =  await getCategoriesAndDocs();
            console.log(categoryMap);
        }
         getCategoriesMap();

    }, []);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}