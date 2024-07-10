import Slider from "react-slick";

import sam1 from '../../assets/sam1.png';
import sam2 from '../../assets/sam2.png';
import sam3 from '../../assets/sam3.png';
import sam4 from '../../assets/sam4.png';
import sam5 from '../../assets/sam5.png';
import background from '../../assets/bg2.png'


function SamsungSlider() {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };
    return (
        <div className="py-24" style={{ backgroundImage: `url(${background})` }}>
            <div className="slider-container max-w-6xl mx-auto ">
                <Slider {...settings}>
                    <div>
                        <div className=" bg-white shadow-xl mx-2">
                            <figure className="px-10 pt-10">
                                <img
                                    src={sam1}
                                    alt="Samsung"
                                    className="" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Galaxy S24 Ultra</h2>
                                <p className="text-gray-800">Price: $1,249</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2">
                            <figure className="px-10 pt-10">
                                <img
                                    src={sam2}
                                    alt="Samsung"
                                    className="" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Galaxy Book3 Pro 360</h2>
                                <p className="text-gray-800">Price: $1,199</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2">
                            <figure className="px-10 pt-10">
                                <img
                                    src={sam3}
                                    alt="Samsung"
                                    className="" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Galaxy Z Fold5</h2>
                                <p className="text-gray-800">Price: $1,800</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2">
                            <figure className="px-10 pt-10">
                                <img
                                    src={sam4}
                                    alt="Samsung"
                                    className="" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Galaxy Book4 Edge</h2>
                                <p className="text-gray-800">Price: $1,350</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2">
                            <figure className="px-10 pt-10">
                                <img
                                    src={sam5}
                                    alt="Samsung"
                                    className="" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Galaxy Watch FE</h2>
                                <p className="text-gray-800">Price: $199</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default SamsungSlider;
