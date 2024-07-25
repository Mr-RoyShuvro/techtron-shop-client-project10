import Slider from "react-slick";
import google1 from '../../assets/google5.png';
import google2 from '../../assets/google3.png';
import google3 from '../../assets/google7.png';
import google4 from '../../assets/google2.png';
import google5 from '../../assets/google1.png';
import background from '../../assets/bg2.png'

function GoogleSlider() {
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
                                    src={google1}
                                    alt="Google"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Nest Hub Max</h2>
                                <p className="text-gray-800">Price: $229</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={google2}
                                    alt="Google"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Google Pixel Watch 2</h2>
                                <p className="text-gray-800">Price: $349.99</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={google3}
                                    alt="Google"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Google Pixel Tablet</h2>
                                <p className="text-gray-800">Price: $399</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={google4}
                                    alt="Google"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Pixel Buds Pro</h2>
                                <p className="text-gray-800">Price: $199.99</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={google5}
                                    alt="Google"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Pixel 7 Pro</h2>
                                <p className="text-gray-800">Price: $1,179</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default GoogleSlider;
