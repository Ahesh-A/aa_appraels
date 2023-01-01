import './checkout.styles.scss';
//import CheckOutCard from '../../components/check-out-card/check-out-card.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const Checkout = () => {
  const { items, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {items.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className='total'>TOTAL: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;