import Slider from "react-slick";
import hp1 from '../../assets/hp6.png';
import hp2 from '../../assets/hp4.png';
import hp3 from '../../assets/hp3.png';
import hp4 from '../../assets/hp2.png';
import hp5 from '../../assets/hp1.png';
import background from '../../assets/bg2.png'

function HpSlider() {
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
                                    src={hp1}
                                    alt="HP"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">HP EliteOne 870 G9</h2>
                                <p className="text-gray-800">Price: $1,139</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={hp2}
                                    alt="HP"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">OMEN Gaming Laptop 16t-wf100</h2>
                                <p className="text-gray-800">Price: $1,449.99</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={hp3}
                                    alt="HP"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">HP ZBook Firefly 14 inch</h2>
                                <p className="text-gray-800">Price: $2,309.00</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={hp4}
                                    alt="HP"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">HP Spectre x360</h2>
                                <p className="text-gray-800">Price: $1,599.99</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={hp5}
                                    alt="HP"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">OMEN TRANSCEND Laptop</h2>
                                <p className="text-gray-800">Price: $1,849.99</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default HpSlider;
