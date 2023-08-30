import './main.css';
import { product01, product01Thumbnail, product02, product02Thumbnail, product03,product03Thumbnail, product04, product04Thumbnail, iconMinus, iconPlus, cart } from './imports'

const Main = () => {
    return ( 
        <div className="ecommerce__main section__padding__main">

            <div className="ecommerce__main-groupA">
               <div className="ecommerce__main-product-img">
                    <div className='ecommerce__main-img'>
                        <img src={product01} alt="" />
                    </div>
                    <div className="ecommerce__main-img-thumbs">
                        <img src={product01Thumbnail} alt="" />
                        <img src={product02Thumbnail} alt="" />
                        <img src={product03Thumbnail} alt="" />
                        <img src={product04Thumbnail} alt="" />
                    </div>
               </div>
            </div>


            <div className="ecommerce__main-groupB">
                <h4>sneaker company</h4>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll will withstand everything the weather can offer.</p>
                <div className="ecommerce__main-product-price">
                    <h1>
                        <span>$125</span>
                        <span>50%</span>
                    </h1>
                    <p>$250</p>
                </div>
                <div className="ecommerce__main-buttons">
                    <div className="ecommerce__main__button-counter">
                        <img src={iconMinus} alt="" />
                        <p>1</p>
                        <img src={iconPlus} alt="" />
                    </div>
                    <button>
                        <img src={cart} alt="" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Main;