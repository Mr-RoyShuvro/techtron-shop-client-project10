import Slider from "react-slick";
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import banner4 from '../../assets/banner4.png';
import banner5 from '../../assets/banner5.png';

import Typewriter from 'typewriter-effect';

// Make sure these CSS files are imported for slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <Slider {...settings}>
                {/* Repeated slide items */}
                <div>
                    <div className='min-h-screen bg-[#ffbb00] flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20'>
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
                            <button className='btn bg-[#FB6542] text-white border-none hover:bg-[#cf5134] text-base font-medium'>Shop Now</button>
                        </div>
                        <div className='ml-20'>
                            <img className='max-w-xs md:max-w-lg md:pt-40 hover:translate-y-5' src={banner1} alt="Banner" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='min-h-screen bg-[#ffbb00] flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20'>
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
                            <button className='btn bg-[#FB6542] text-white border-none hover:bg-[#cf5134] text-base font-medium'>Shop Now</button>
                        </div>
                        <div className='ml-20'>
                            <img className='max-w-xs md:max-w-lg md:pt-40 hover:translate-y-5' src={banner2} alt="Banner" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='min-h-screen bg-[#ffbb00] flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20'>
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
                            <button className='btn bg-[#FB6542] text-white border-none hover:bg-[#cf5134] text-base font-medium'>Shop Now</button>
                        </div>
                        <div className='ml-20'>
                            <img className='max-w-xs md:max-w-sm hover:translate-y-5' src={banner3} alt="Banner" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='min-h-screen bg-[#ffbb00] flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20'>
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
                            <button className='btn bg-[#FB6542] text-white border-none hover:bg-[#cf5134] text-base font-medium'>Shop Now</button>
                        </div>
                        <div className='ml-20'>
                            <img className='max-w-xs md:max-w-sm hover:translate-y-5' src={banner4} alt="Banner" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='min-h-screen bg-[#ffbb00] flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20'>
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
                            <button className='btn bg-[#FB6542] text-white border-none hover:bg-[#cf5134] text-base font-medium'>Shop Now</button>
                        </div>
                        <div className='ml-20'>
                            <img className='max-w-xs md:max-w-xl md:pt-40 hover:translate-y-5' src={banner5} alt="Banner" />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Banner;
