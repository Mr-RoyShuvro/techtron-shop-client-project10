import Slider from "react-slick";
import microsoft1 from '../../assets/microsoft5.png';
import microsoft2 from '../../assets/microsoft4.png';
import microsoft3 from '../../assets/microsoft3.png';
import microsoft4 from '../../assets/microsoft2.png';
import microsoft5 from '../../assets/microsoft1.png';
import background from '../../assets/bg2.png'

function MicrosoftSlider() {
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
                            <figure className="px-10 pt-10 h-72">
                                <img
                                    src={microsoft1}
                                    alt="Microsoft"
                                    className="max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Surface Laptop 5</h2>
                                <p className="text-gray-800">Price: $1,324</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2">
                            <figure className="px-10 pt-10 h-72">
                                <img
                                    src={microsoft2}
                                    alt="Microsoft"
                                    className="max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">New Surface Laptop 13.8”</h2>
                                <p className="text-gray-800">Price: $999.99</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2">
                            <figure className="px-10 pt-10 h-72">
                                <img
                                    src={microsoft3}
                                    alt="Microsoft"
                                    className="max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Surface Duo 2</h2>
                                <p className="text-gray-800">Price: $839.00</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2">
                            <figure className="px-10 pt-10 h-72">
                                <img
                                    src={microsoft4}
                                    alt="Microsoft"
                                    className="max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Surface Pro</h2>
                                <p className="text-gray-800">Price: $2,099.99</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2">
                            <figure className="px-10 pt-10 h-72">
                                <img
                                    src={microsoft5}
                                    alt="Microsoft"
                                    className="max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Surface Laptop Studio 2</h2>
                                <p className="text-gray-800">Price: $1999.99
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default MicrosoftSlider;
