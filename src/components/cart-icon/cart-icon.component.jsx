import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartIcon = () => {
    const { isopen, setIsopen, count} = useContext(CartContext)
    const clilckHandler = () => {
        setIsopen(!isopen);
    }

    return (
        <CartIconContainer onClick={clilckHandler}>
            <ShoppingIcon />
            <ItemCount>{count}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;