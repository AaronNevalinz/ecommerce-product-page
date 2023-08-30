import './navbar.css';
import { cartIcon, userImg, logo, menuIcon, closeIcon } from './imports'
import { useState } from 'react';
import Cart from '../cart/Cart';

const Menu = ()=>(
    <>
        <p><a href="/">Collections</a></p>
        <p><a href="/">Men</a></p>
        <p><a href="/">Women</a></p>
        <p><a href="/">About</a></p>
        <p><a href="/">Contact</a></p>
    </>
)

const Navbar = () => {

    const [toggle, setToggleMenu] = useState(false);
    const [toggleCart, setToggleCart] = useState(false);

    return ( 
        <div className='ecommerce__navbar'>
             
            
            <div className="ecommerce__navbar-links">

            <div className='ecommerce__navbar-toggle-icons'>
                    {
                        toggle
                        ?
                        <img src={closeIcon} alt="" onClick={()=>setToggleMenu(false)}/>
                        :<img src={menuIcon} alt="" onClick={()=>setToggleMenu(true)}/>
                    }
                    {
                        toggle && (
                            <div className="ecommerce__navbar__mobile-links">
                                <img  src={closeIcon} alt="" onClick={()=>setToggleMenu(false)}/>
                                <Menu/>
                            </div>
                        )
                    }
                    
                </div>
                <div className="ecommerce__navbar-links-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="ecommerce__navbar-links-container">
                    <Menu/>
                </div>
            </div>
            
            <div className="ecommerce__navbar-icons">
                <img src={cartIcon} alt="cartIcon" />
                {
                    toggleCart
                    ?
                    <img className='ecommerce__navbar-user-img' src={userImg} onClick={()=>setToggleCart(false)} alt="user-profile" />
                    :
                    <img className='ecommerce__navbar-user-img' src={userImg} onClick={()=>setToggleCart(true)} alt="user-profile" />
                }
                {
                    toggleCart && (
                        <div className="ecommerce__navbar-cart-toggle">
                            <Cart/>
                        </div>
                    )
                }
            </div>
        </div>
     );
}
 
export default Navbar;