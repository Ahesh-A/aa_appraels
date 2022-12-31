import { createContext, useState, useEffect } from 'react';

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
const decreaseCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const removeCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext(
    {
        isopen: false,
        setIsopen: () => null,
        items: [],
        addItemsToCart: () => { },
        decreaseCartItem: () => { },
        removeCartItem: () => { },
        count: 0
    }
);

export const CartProvider = ({ children }) => {

    const addItemsToCart = (productToAdd) => {
        setItems(addCartItem(items, productToAdd));
    }

    const removeItemsFromCart = (productToRemove) => {
        setItems(removeCartItem(items, productToRemove));
    }

    const decreaseItemsFromCart = (productToDecrease) => {
        const res = decreaseCartItem(items, productToDecrease);
        console.log(res);
        setItems(res);
    }

    const [isopen, setIsopen] = useState(false);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const value = {
        isopen, setIsopen, items,
        addItemsToCart, count, removeItemsFromCart,
        decreaseItemsFromCart, cartTotal
    }

    useEffect(() => {
        const total = items.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
        setCount(total);
    }, [items]);

    useEffect(() => {
        const newCartTotal = items.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [items]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}