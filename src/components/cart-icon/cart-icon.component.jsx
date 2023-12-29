import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const isCartOpenToggle = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer>
            <ShoppingIcon onClick={isCartOpenToggle}/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;