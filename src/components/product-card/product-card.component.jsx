import Button from "../button/Button.component";
import "./product-card.styles.scss";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
//import { createAction } from "../../utils/reducer/reducer.util";
import { addItemsToCart } from "../../store/cart/cart.action";
const ProductCard = ({ product }) => {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // const addCartItem = (items, productToAdd) => {
  //   const existingCartItem = items.find((item) => item.id === productToAdd.id);
  //   if (existingCartItem) {
  //     return items.map((item) =>
  //       item.id === productToAdd.id
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     );
  //   }
  //   return [...items, { ...productToAdd, quantity: 1 }];
  // };
  const addProductsToCart = () => dispatch(addItemsToCart(items, product));

  // const add = (product) => {
  //   const newCartItems = addCartItem(items, product);
  //   dispatch(createAction("SET_CART_ITEMS", { items: newCartItems }));
  // };
  //const { addItemsToCart } = useContext(CartContext);

  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductsToCart}>
        Add item
      </Button>
    </div>
  );
};

export default ProductCard;
