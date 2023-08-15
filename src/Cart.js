import './index.css'
import './style.css'
import productImg from './images/image-product-1-thumbnail.jpg'
import deleteIcon from './images/icon-delete.svg'

const Cart = () => {
    return ( 
        <div className='absolute shadow-2xl top-0 mt-[90px] right-0 rounded-2xl mr-32 bg-white z-20'>
            <h3 className='my-2 px-8 py-2 font-bold'>Cart</h3>
            <hr />
            <div className='flex items-center gap-4 my-4 px-8 py-2'>
                <img className='w-16 rounded-lg' src={productImg} alt="" />
                <p className='flex flex-col text-secondary-200'>
                    <span>Fall Limited Edition Sneakers</span>
                    <span>$125.00 x 3 <span className='font-bold text-black'>$375.00</span></span>
                </p>
                <img className='cursor-pointer' src={deleteIcon} alt="" />
            </div>
           <div className="px-8 py-2 mb-5">
                <button className='bg-primary-100 w-full rounded-lg text-white py-3'>Check Out</button>
           </div>
        </div>
     );
}
 
export default Cart;
