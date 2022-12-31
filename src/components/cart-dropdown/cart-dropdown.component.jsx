import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/components/cart-dropdown/cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component.jsx';
import Button from '../button/Button.component.jsx';
import { CartContext } from '../contexts/cart.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const CartDropdown = () => {
    const navigate = useNavigate();
    const goToCheckoutHandler = () =>{
        navigate('/check-out')
    }
    const { items } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {items.map((item) => <CartItem
                    key={item.id}
                    cartItem={item}
                />)}
            </div>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>

        </div>
    );

}

export default CartDropdown;