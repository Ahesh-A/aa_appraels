import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/components/cart-dropdown/cart-dropdown.styles.scss';
import Button from '../button/Button.component';
import CartItem from '../cart-item/cart-item.component.jsx';
import { CartContext } from '../contexts/cart.context';
import { useContext } from 'react';
const CartDropdown = () => {

    const { items } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {items.map((item) => <CartItem
                    key = {item.id}
                    cartItem = {item}
                />)}
            </div>
            <Button >CHECKOUT</Button>
        </div>
    );

}

export default CartDropdown;