import '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/components/cart-icon/cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '/media/ahesh/D4A801FFA801E13A/React/A&A_apparels/src/assets/shopping-bag.svg';
import { CartContext } from '../contexts/cart.context';
import { useContext } from 'react';

const CartIcon = () => {
    const { isopen, setIsopen, count} = useContext(CartContext)
    const clilckHandler = () => {
        setIsopen(!isopen);
    }

    return (
        <div className='cart-icon-container' onClick={clilckHandler}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{count}</span>
        </div>
    );
};

export default CartIcon;