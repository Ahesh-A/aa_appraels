import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.util";

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const setCartItems = (newCartItems, newCartCount, newCartTotal) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
    items: newCartItems,
    count: newCartCount,
    cartTotal: newCartTotal,
  });

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

export const addItemsToCart = (items, productToAdd) => {
  const newCartItems = addCartItem(items, productToAdd);
  console.log("newCartItems", newCartItems)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemsFromCart = (items, productToRemove) => {
  const newCartItems = removeCartItem(items, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const decreaseItemsFromCart = (items, productToDecrease) => {
  const newCartItems = decreaseCartItem(items, productToDecrease);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
