import mobileHero from './images/image-product-1.jpg'
import product2 from './images/image-product-2.jpg';
import product3 from './images/image-product-3.jpg';
import product4 from './images/image-product-4.jpg';
import './style.css';
import chart from './images/icon-cart.svg'
import minusIcon from './images/icon-minus.svg';
import plusIcon from './images/icon-plus.svg';
import arrowNext from './images/icon-next.svg';
import arrowPrevious from './images/icon-previous.svg';
import {useState} from 'react';

const Main = () => {

    let price = 250;
    let discount = 50;
    let discountedPrice = discount/100 * price;
    let slideIndex = 0
    const imageSlide = document.querySelectorAll('.imageSlide');

    function moveSlider(e){
        if(e.currentTarget.id.includes('right')){
            slideIndex === imageSlide.length - 1 ? (slideIndex=0) : slideIndex++;
        }else{
            slideIndex === 0 ? (slideIndex = imageSlide.length -1) : slideIndex--;
        }
        document.querySelector('.imageSlide').style.transform = `translate(${-100 * slideIndex}%)`;
    }

    const [count, setCount] = useState(0);

    return ( 

        <main className="md:grid grid-cols-2 md:w-[70%] md:mx-auto items-center gap-24 md:mt-5">
            {/* for mobile */}
            <div className='h-[35vh] relative overflow-hidden md:hidden'>
                {/* left arrow button */}
                <button onClick={moveSlider} className='absolute top-1/2 -translate-y-1/2 cursor-pointer left-[4%] bg-white p-4 rounded-lg'  id='left'>
                    <img className='' src={arrowPrevious} alt=""/>
                </button>
                {/* Product Image Slides */}
                <div className='flex imageSlide'>
                    <img className='w-full object-cover' src={mobileHero} alt="Mobile-hero" />
                    <img className='w-full object-cover' src={product2} alt="" />
                    <img className='w-full object-cover' src={product3} alt="" />
                    <img className='w-full object-cover' src={product4} alt="" />
                </div>
                {/* right arrow button */}
                <button onClick={moveSlider} className='absolute top-1/2 -translate-y-1/2 cursor-pointer right-[4%] bg-white p-4 rounded-lg' id='right'>
                    <img className='' src={arrowNext} alt="" />
                </button>
            </div>
            {/* end for mobile */}

            {/* for tablet and desktop */}
            <div className='hidden md:block'>
                <img className='rounded-lg w-full  h-[50vh] mb-5' src={mobileHero} alt="" />
                <div className='flex justify-between'>
                    <img className='w-24 rounded-lg object-cover cursor-pointer' src={mobileHero} alt="" />
                    <img className='w-24 rounded-lg object-cover cursor-pointer' src={product2} alt="" />
                    <img className='w-24 rounded-lg object-cover cursor-pointer' src={product3} alt="" />
                    <img className='w-24 rounded-lg object-cover cursor-pointer' src={product4} alt="" />
                </div>
            </div>

            {/* end of for tablet and desktop */}

            <div className="p-5">
                <h4 className='uppercase text-primary-100 text-sm font-medium'>Sneaker company</h4>
                <h1 className='font-bold text-3xl md:text-5xl md:my-3'>Fall Limited Edition Sneakers</h1>
                <p className='py-3 text-secondary-200 text-sm md:text-base'>
                    These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>

                <h1 className='font-bold flex justify-between items-end md:flex-col md:items-start md:gap-2'>
                    <span>
                        <span className='text-3xl'>${discountedPrice}.00</span>
                        <span className='bg-primary-200 text-primary-100 p-1 text-lg rounded-xl mx-4'>{discount}%</span>
                    </span>
                    <span className='text-secondary-200 line-through'>{price}.00</span>
                </h1>

                <div className='md:flex gap-3'>
                    <div className='flex justify-between bg-secondary-200 py-2 px-4 rounded-lg mt-3 items-center md:w-[150px]'>
                        <span>
                            <img onClick={()=>setCount(count-1)} className='cursor-pointer' src={minusIcon} alt="" />
                        </span>

                        <p>{count}</p>
                        
                        <span>
                            <img onClick={()=>setCount(count+1)} className='cursor-pointer' src={plusIcon} alt="" />
                        </span>
                    </div>
                    <button className='flex bg-primary-100 w-full text-slate-50 font-medium justify-center py-2 mt-3 rounded-lg cursor-pointer'>
                        <img className='fill-white' src={chart} alt="" />
                        Add to chart
                    </button>
                </div>

            </div>
        </main>
     );
}
 
export default Main;