import Slider from "react-slick";
import sony1 from '../../assets/sony5.png';
import sony2 from '../../assets/sony4.png';
import sony3 from '../../assets/sony3.png';
import sony4 from '../../assets/sony2.png';
import sony5 from '../../assets/sony1.png';
import background from '../../assets/bg2.png'

function SonySlider() {
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
                                    src={sony1}
                                    alt="Sony"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Xperia 1 V 256GB</h2>
                                <p className="text-gray-800">Price: $1,099.99</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={sony2}
                                    alt="Sony"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">XG300 MEGA BASS Portable</h2>
                                <p className="text-gray-800">Price: $349.99</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={sony3}
                                    alt="Sony"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">LinkBuds S x Olivia Rodrigo</h2>
                                <p className="text-gray-800">Price: $199.99</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={sony4}
                                    alt="Sony"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">ULT POWER SOUND series</h2>
                                <p className="text-gray-800">Price: $129.99</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2 h-96">
                            <figure className="md:px-10 pt-10 h-32 md:h-72">
                                <img
                                    src={sony5}
                                    alt="Sony"
                                    className="max-h-28 md:max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">Xperia 5 IV 5G</h2>
                                <p className="text-gray-800">Price: $699.99</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default SonySlider;
