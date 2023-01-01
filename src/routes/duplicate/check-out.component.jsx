import './check-out.styles.scss';
import CheckOutCard from './check-out-card/check-out-card.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
const CheckOut = () => {
    const { items } = useContext(CartContext);
    return (
        <div className="check-out container">
            <div className='title-bar' >
                <span>Product</span>
                <span>Description</span>
                <span> Quantity</span>
                <span> Price</span>
                <span>Remove</span>
            </div>
            <div className='check-out-card-container'>
                {
                    items.map((item, id) =>
                        <CheckOutCard
                            key={id}
                            item = {item}

                        />)
                }
            </div>

        </div>

    );
};

export default CheckOut;