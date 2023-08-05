import mobileHero from './images/image-product-1.jpg'
import './style.css'
import chart from './images/icon-cart.svg'
import minusIcon from './images/icon-minus.svg';
import plusIcon from './images/icon-plus.svg';

const Main = () => {

    let price = 250;
    let discount = 50;
    let discountedPrice = discount/100 * price;
    let count = 0;

    return ( 

        <main className="">
            <div className='h-[35vh]'>
                <img className='w-full object-cover h-[35vh]' src={mobileHero} alt="Mobile-hero" />
            </div>

            <div className="p-5">
                <h4 className='uppercase text-primary-100 text-sm font-medium'>Sneaker company</h4>
                <h1 className='font-bold text-3xl'>Fall Limited Edition Sneakers</h1>
                <p className='py-3 text-secondary-200 text-sm'>
                    These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>

                <h1 className='font-bold flex justify-between items-end'>
                    <span>
                        <span className='text-3xl'>${discountedPrice}.00</span>
                        <span className='bg-primary-200 text-primary-100 p-1 text-lg rounded-xl mx-4'>{discount}%</span>
                    </span>
                    <span className='text-secondary-200'>{price}</span>
                </h1>

                <div className='flex justify-between bg-secondary-300 py-2 px-4 rounded-lg mt-3 items-center'>
                    <span>
                        <img className='cursor-pointer' src={minusIcon} alt="" />
                    </span>

                    <p>{count}</p>
                    
                    <span>
                        <img className='cursor-pointer' src={plusIcon} alt="" />
                    </span>
                </div>
                <button className='flex bg-primary-100 w-full text-slate-50 font-medium justify-center py-2 mt-3 rounded-lg cursor-pointer'>
                    <img className='fill-secondary-50' src={chart} alt="" />
                    Add to chart
                </button>
            </div>
        </main>
     );
}
 
export default Main;