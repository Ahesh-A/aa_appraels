import { createContext, useState } from "react";
import PRODUCT from '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/Data/shop-data.json';


export const ProductContext = createContext({
    product: [],
    setProduct: () => null
});

export const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState(PRODUCT);
    const value = { product, setProduct };
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}