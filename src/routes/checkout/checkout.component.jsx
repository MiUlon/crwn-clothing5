import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

    return(
        <div>
            <h1>This is Checkout page!</h1>
            <div>
                {cartItems.map((cartItem) => {
                    const { id, name, quantity } = cartItem;
                    return(
                        <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <br />
                            <span onClick={() => removeItemFromCart(cartItem)}>Decrease</span>
                            <br />
                            <span onClick={() => addItemToCart(cartItem)}>Increase</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Checkout;