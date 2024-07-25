import Slider from "react-slick";
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import banner4 from '../../assets/banner4.png';
import banner6 from '../../assets/sony4.png'
import banner7 from '../../assets/hp1.png'

import Typewriter from 'typewriter-effect';

// Make sure these CSS files are imported for slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Banner() {
    const settings = {
        dots: false,        // Disable indicator buttons
        arrows: false,      // Disable previous and next buttons
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,     // Enable autoplay
        speed: 2000,        // Duration of one slide in ms
        autoplaySpeed: 10000, // Time between transitions in ms
        cssEase: "linear",
        pauseOnHover: false // Don't pause on hover
    };

    return (
        <div className="slider-container">
            <Slider className="min-h-screen bg-[#ffbb00]" {...settings}>
                {/* Repeated slide items */}
                <div>
                    <div className='h-[600px]  flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20'>
                        <div className='text-center md:text-left'>
                            <h3 className='text-5xl font-bold text-[#2A3132] md:pt-52'>Stay Ahead with Our<br /> <span className="text-[#FB6542]">
                                <Typewriter
                                    options={{
                                        strings: ['Tech Products!'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></span></h3>
                            <p className='py-5 text-gray-800'>Explore a wide range of cutting-edge electronics and tech gadgets. Find <br />deals on top brands and enjoy exceptional customer service.</p>
                            <Link to='/all'>
                                <button className='btn bg-[#FB6542] text-white border-none mb-2 hover:bg-[#cf5134] text-base font-medium'>Shop Now</button>
                            </Link>
                        </div>
                        <div className='ml-20 pt-40'>
                            <img className='max-w-xs md:max-w-xl  hover:translate-y-5' src={banner1} alt="Banner" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-[600px]  flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20'>
                        <div className='text-center md:text-left'>
                            <h3 className='text-5xl font-bold text-[#2A3132] md:pt-52'>Stay Ahead with Our<br /> <span className="text-[#FB6542]">
                                <Typewriter
                                    options={{
                                        strings: ['Tech Products!'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></span></h3>
                            <p className='py-5 text-gray-800'>Explore a wide range of cutting-edge electronics and tech gadgets. Find <br />deals on top brands and enjoy exceptional customer service.</p>
                            <Link to='/all'>
                                <button className='btn bg-[#FB6542] text-white border-none mb-2 hover:bg-[#cf5134] text-base font-medium'>Shop Now</button>
                            </Link>
                        </div>
                        <div className='ml-20 pt-40'>
                            <img className='max-w-xs md:max-w-xl  hover:translate-y-5' src={banner2} alt="Banner" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-[600px]  flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20'>
                        <div className='text-center md:text-left'>
                            <h3 className='text-5xl font-bold text-[#2A3132] md:pt-52'>Stay Ahead with Our<br /> <span className="text-[#FB6542]">
                                <Typewriter
                                    options={{
                                        strings: ['Tech Products!'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></span></h3>
                            <p className='py-5 text-gray-800'>Explore a wide range of cutting-edge electronics and tech gadgets. Find <br />deals on top brands and enjoy exceptional customer service.</p>
                            <Link to='/all'>
                                <button className='btn bg-[#FB6542] text-white border-none mb-2 hover:bg-[#cf5134] text-base font-medium'>Shop Now</button>
                            </Link>
                        </div>
                        <div className='ml-20 '>
                            <img className='max-w-60 md:max-w-sm hover:translate-y-5' src={banner3} alt="Banner" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-[600px]  flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20'>
                        <div className='text-center md:text-left'>
                            <h3 className='text-5xl font-bold text-[#2A3132] md:pt-52'>Stay Ahead with Our<br /> <span className="text-[#FB6542]">
                                <Typewriter
                                    options={{
                                        strings: ['Tech Products!'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></span></h3>
                            <p className='py-5 text-gray-800'>Explore a wide range of cutting-edge electronics and tech gadgets. Find <br />deals on top brands and enjoy exceptional customer service.</p>
                            <Link to='/all'>
                                <button className='btn bg-[#FB6542] text-white border-none mb-2 hover:bg-[#cf5134] text-base font-medium'>Shop Now</button>
                            </Link>
                        </div>
                        <div className='ml-20 pt-36'>
                            <img className='max-w-xs md:max-w-xl hover:translate-y-5' src={banner6} alt="Banner" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-[600px]  flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20'>
                        <div className='text-center md:text-left'>
                            <h3 className='text-5xl font-bold text-[#2A3132] md:pt-52'>Stay Ahead with Our<br /> <span className="text-[#FB6542]">
                                <Typewriter
                                    options={{
                                        strings: ['Tech Products!'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></span></h3>
                            <p className='py-5 text-gray-800'>Explore a wide range of cutting-edge electronics and tech gadgets. Find <br />deals on top brands and enjoy exceptional customer service.</p>
                            <Link to='/all'>
                                <button className='btn bg-[#FB6542] text-white border-none mb-2 hover:bg-[#cf5134] text-base font-medium'>Shop Now</button>
                            </Link>
                        </div>
                        <div className='ml-20'>
                            <img className='max-w-56 md:max-w-md hover:translate-y-5' src={banner4} alt="Banner" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-[600px]  flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20'>
                        <div className='text-center md:text-left'>
                            <h3 className='text-5xl font-bold text-[#2A3132] md:pt-52'>Stay Ahead with Our<br /> <span className="text-[#FB6542]">
                                <Typewriter
                                    options={{
                                        strings: ['Tech Products!'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></span></h3>
                            <p className='py-5 text-gray-800'>Explore a wide range of cutting-edge electronics and tech gadgets. Find <br />deals on top brands and enjoy exceptional customer service.</p>
                            <Link to='/all'>
                                <button className='btn bg-[#FB6542] text-white border-none mb-2 hover:bg-[#cf5134] text-base font-medium'>Shop Now</button>
                            </Link>
                        </div>
                        <div className='ml-20 pt-24'>
                            <img className='max-w-xs pb-5 md:max-w-xl  hover:translate-y-5' src={banner7} alt="Banner" />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Banner;
