// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

export default function AboutClients() {
    return (
        <>
            <div className='bg-gray-100 pb-20 pt-5'>
                <div>
                    <h3 className="text-[#FB6542] text-5xl font-semibold text-center pb-5 pt-10">Client Testimonials</h3>
                    <h3 className="text-center text-gray-700 font-normal text-base max-w-3xl mx-auto pb-10">
                        See what our clients have to say about their experiences with us. Their trust and satisfaction drive our commitment to excellence.
                    </h3>
                </div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}

                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div className=" bg-white shadow-xl p-4 rounded-none mx-auto">
                            <img src="https://i.ibb.co/TP1HZPq/Screenshot-1703.png" alt='About Client' className="rounded-full w-32 h-36 mx-auto" />
                            <div className="pt-3">
                                <h2 className="text-xl font-bold text-black text-center">John Smith</h2>
                                <h2 className="text-base font-medium text-black text-center">New York, NY</h2>
                                <Stack className='flex items-center py-5' spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                </Stack>
                                <p className="pt-3 pb-20 px-2 text-base text-slate-500 text-center">I have been a customer of this electronics shop for over a year now, and I have never been disappointed. I highly recommend this shop to anyone looking for reliable electronics and top-notch customer service.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className=" bg-white shadow-xl p-4 rounded-none mx-auto">
                            <img src="https://i.ibb.co/LZcZDkk/Screenshot-1705.png" alt='About Client' className="rounded-full w-32 h-36 mx-auto" />
                            <div className="pt-3">
                                <h2 className="text-xl font-bold text-black text-center">Sarah Johnson</h2>
                                <h2 className="text-base font-medium text-black text-center">Los Angeles, CA</h2>
                                <Stack className='flex items-center py-5' spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                                </Stack>
                                <p className="pt-3 pb-20 px-2 text-base text-slate-500 text-center">I recently bought a laptop from this store, and I am thrilled with my purchase. The website is user-friendly, and I found all the information. The customer service team was very helpful in guiding me through the features.</p>
                            </div>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className=" bg-white shadow-xl p-4 rounded-none mx-auto">
                            <img src="https://i.ibb.co/PDh6DHC/Screenshot-1707.png" alt='About Client' className="rounded-full w-32 h-36 mx-auto" />
                            <div className="pt-3">
                                <h2 className="text-xl font-bold text-black text-center">Michael Brown</h2>
                                <h2 className="text-base font-medium text-black text-center">Chicago, IL</h2>
                                <Stack className='flex items-center py-5' spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                </Stack>
                                <p className="pt-3 pb-20 px-2 text-base text-slate-500 text-center">This electronics shop has exceeded my expectations time and again. From the moment I placed my order to the delivery, everything was seamless. The products are of high quality and the prices are reasonable.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className=" bg-white shadow-xl p-4 rounded-none mx-auto">
                            <img src="https://i.ibb.co/RPprC1n/Screenshot-1704.png" alt='About Client' className="rounded-full w-32 h-36 mx-auto" />
                            <div className="pt-3">
                                <h2 className="text-xl font-bold text-black text-center">Emily Davis</h2>
                                <h2 className="text-base font-medium text-black text-center">Houston, TX</h2>
                                <Stack className='flex items-center py-5' spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                </Stack>
                                <p className="pt-3 pb-20 px-2 text-base text-slate-500 text-center">I have had nothing but positive experiences with this electronics shop. Their range of products is impressive, and the quality is always top-notch. I recently bought a smart TV, and I am extremely happy with it.</p>
                            </div> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className=" bg-white shadow-xl p-4 rounded-none mx-auto">
                            <img src="https://i.ibb.co/Jtb1VKq/Screenshot-1708.png" alt='About Client' className="rounded-full w-32 h-36 mx-auto" />
                            <div className="pt-3">
                                <h2 className="text-xl font-bold text-black text-center">David Martinez</h2>
                                <h2 className="text-base font-medium text-black text-center">Miami, FL</h2>
                                <Stack className='flex items-center py-5' spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                                </Stack>
                                <p className="pt-3 pb-20 px-2 text-base text-slate-500 text-center">As someone who is not very tech-savvy, I found this shop to be incredibly helpful. The staff was patient and took the time to explain the features of different products to me. I ended up buying a new smartphone, and I could not be happier with it.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className=" bg-white shadow-xl p-4 rounded-none mx-auto">
                            <img src="https://i.ibb.co/SdF9rY0/Screenshot-1702.png" alt='About Client' className="rounded-full w-32 h-36 mx-auto" />
                            <div className="pt-3">
                                <h2 className="text-xl font-bold text-black text-center">Jessica Lee</h2>
                                <h2 className="text-base font-medium text-black text-center">Seattle, WA</h2>
                                <Stack className='flex items-center py-5' spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                </Stack>
                                <p className="pt-3 pb-20 px-2 text-base text-slate-500 text-center">I have been a loyal customer of this electronics shop for several years now. Every purchase I have made has been a positive experience. The selection of products is vast, and the quality is always reliable.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <style>{`
        #app {
          height: 100%;
        }
        html,
        body {
          position: relative;
          height: 100%;
        }
        body {
          background: #FB6542;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #000;
          margin: 0;
          padding: 0;
        }
        .swiper {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 500px;
          height: 500px;
        }
        .swiper-slide img {
          display: block;
        //   width: 100%;
        }
      `}</style>
        </>
    );
}
