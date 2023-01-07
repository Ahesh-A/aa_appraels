import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.util";
const addCartItem = (items, productToAdd) => {
  const existingCartItem = items.find((item) => item.id === productToAdd.id);
  if (existingCartItem) {
    return items.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...items, { ...productToAdd, quantity: 1 }];
};
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

export const CartContext = createContext({
  isopen: false,
  setIsopen: () => null,
  items: [],
  addItemsToCart: () => {},
  decreaseCartItem: () => {},
  removeCartItem: () => {},
  count: 0,
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  TOGGLE: "TOGGLE",
};
const INITIAL_STATE = {
  isopen: false,
  items: [],
  count: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
    case CART_ACTION_TYPES.TOGGLE:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cart reducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ items, isopen, count, cartTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setIsopen = () => {
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE, { isopen: !isopen }));
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );

    const newCartTotal = items.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        items: newCartItems,
        cartTotal: newCartTotal,
        count: newCartCount,
      })
    );
  };

  const addItemsToCart = (productToAdd) => {
    const newCartItems = addCartItem(items, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemsFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(items, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const decreaseItemsFromCart = (productToDecrease) => {
    const newCartItems = decreaseCartItem(items, productToDecrease);
    updateCartItemsReducer(newCartItems);
  };
  const value = {
    isopen,
    setIsopen,
    items,
    addItemsToCart,
    count,
    removeItemsFromCart,
    decreaseItemsFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
