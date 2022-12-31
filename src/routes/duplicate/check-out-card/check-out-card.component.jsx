import './check-out-card.styles.scss';
import { CartContext } from '../../../components/contexts/cart.context';
import { useContext } from 'react';
const CheckOutCard = ({ item }) => {
    const { addItemsToCart, removeItemsFromCart, decreaseItemsFromCart } = useContext(CartContext);

    const { name, price, quantity, imageUrl } = item;

    const addHandler = () => {
         addItemsToCart(item);
    }
    const decreaseCartItemHandler = () =>{
        decreaseItemsFromCart(item);
    }
    const removeItemFormCartHandler = () =>{
         removeItemsFromCart(item);
    }
    return (
        <div className='check-out-card'>
            <span><img src={imageUrl} /></span>
            <span>{name}</span>
            <span>
                <button onClick={addHandler}>
                    <i className="fa-sharp fa-solid fa-chevron-up"></i>
                </button>
                {quantity}
                <button onClick={decreaseCartItemHandler}>
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
            </span>

            <span>{price * quantity}</span>
            <span>
                <button onClick = {removeItemFormCartHandler}>
                    <i className="fa-sharp fa-solid fa-xmark"></i>
                </button>
            </span>
        </div>
    );
};

export default CheckOutCard;