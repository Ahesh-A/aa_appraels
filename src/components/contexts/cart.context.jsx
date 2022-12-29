import { createContext, useState } from 'react';

const addCartItem = (items, productToAdd) => {

    const existingCartItem = items.find((item) => item.id === productToAdd.id);

    if (existingCartItem) {
        return items.map((item) =>
            item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 } :
                item);
    }
    return [...items, { ...productToAdd, quantity: 1 }];
}
export const CartContext = createContext(
    {
        isopen: false,
        setIsopen: () => null,
        items: [],
        addItemsToCart: () => { }
    }
);

export const CartProvider = ({ children }) => {
    const addItemsToCart = (productToAdd) => {
        setItems(addCartItem(items, productToAdd));
    }
    
    const [isopen, setIsopen] = useState(false);
    const [items, setItems] = useState([]);
    const value = { isopen, setIsopen, items, addItemsToCart }
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}