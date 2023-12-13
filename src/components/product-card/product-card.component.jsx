import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ProductCardContainer, Footer, Name, Price } from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <img src={imageUrl}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonTypes='inverted' onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    );
};

export default ProductCard;