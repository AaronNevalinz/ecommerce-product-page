import './cart.css';
import { deleteIcon, productImg } from './imports'

const Cart = () => {
    return ( 
        <div className='ecommerce__cart'>
            <h4>Cart</h4>
            <hr />
            <div className='ecommerce__cart-product'>
                <img src={productImg} alt="" />
                <span className='ecommerce__cart-product-name'>
                    <p>Full Limited Edition Sneakers</p>
                    <p>
                        $125 x 3 
                        <span className='ecommerce__cart-product-total'>$375.00</span>
                    </p>
                </span>
                <img src={deleteIcon} alt="" />
            </div>
            <div className="ecommerce__cart-button">
                <button>Checkout</button>
            </div>
        </div>
     );
}
 
export default Cart;