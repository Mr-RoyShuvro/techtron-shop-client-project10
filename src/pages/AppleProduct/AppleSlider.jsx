import Slider from "react-slick";
import apple1 from '../../assets/apple1.png';
import apple2 from '../../assets/apple2.png';
import apple3 from '../../assets/apple3.png';
import apple4 from '../../assets/apple4.png';
import apple5 from '../../assets/apple5.png';
import background from '../../assets/bg2.png'

function AppleSlider() {
    var settings = {
        dots: false,
        arrows: false,
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
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={apple1}
                                    alt="Apple"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">iPhone 14 Plus</h2>
                                <p className="text-gray-800">Price: $1,299</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={apple2}
                                    alt="Apple"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Apple Watch Ultra 2</h2>
                                <p className="text-gray-800">Price: $799</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={apple3}
                                    alt="Apple"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">iPad Air 13-inch</h2>
                                <p className="text-gray-800">Price: $1,249</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={apple4}
                                    alt="Apple"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">iPhone 15 Pro Max</h2>
                                <p className="text-gray-800">Price: $1,429</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={apple5}
                                    alt="Apple"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Apple Watch Series 9</h2>
                                <p className="text-gray-800">Price: $399</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default AppleSlider;
