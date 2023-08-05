import './index.css';
import shoppingCart from './images/icon-cart.svg'
import profileImg from './images/image-avatar.png'
import logo from './images/logo.svg'
import './style.css'
import menu from './images/icon-menu.svg'
import close from './images/icon-close.svg';

const Navbar = () => {
   
    
    
    const handleHamburgerClick = ()=>{
        const navbarLinks = document.getElementById('navbar-links');
        navbarLinks.classList.remove('hidden');
    }
    const handleCloseClick = ()=>{
        const navbarLinks = document.getElementById('navbar-links');
        navbarLinks.classList.add('hidden');
    }


    return (
        <nav className="flex items-center justify-between px-5 py-2 relative">
            <div className="flex items-center">
                <img onClick={handleHamburgerClick} className='mr-4' src={menu} alt="hamburger-menu" id='hamburger-menu'/>
                <img src={logo} alt="Logo" />
                <ul className="fixed hidden z-20 top-0 h-screen left-0 w-[70vw] md:flex gap-4 pt-4 pl-5 bg-white font-bold" id='navbar-links'>
                    <img onClick={handleCloseClick} className='w-5 mt-2 mb-10' id='close' src={close} alt="" />
                    <li className='mb-5'><a href="/">Collections</a></li>
                    <li className='mb-5'><a href="/">Men</a></li>
                    <li className='mb-5'><a href="/">Women</a></li>
                    <li className='mb-5'><a href="/">About</a></li>
                    <li className=''><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className="flex gap-4 items-center">
                <img className='cursor-pointer' src={shoppingCart} alt="Shopping Cart" />
                <img className='w-10 cursor-pointer' src={profileImg} alt="ProfileImg" />
            </div>
        </nav>
     );
}

export default Navbar;