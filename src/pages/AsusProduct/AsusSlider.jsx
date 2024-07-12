import Slider from "react-slick";
import asus1 from '../../assets/asus5.png';
import asus2 from '../../assets/asus4.png';
import asus3 from '../../assets/asus3.png';
import asus4 from '../../assets/asus2.png';
import asus5 from '../../assets/asus1.png';
import background from '../../assets/bg2.png'

function AsusSlider() {
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
                                    src={asus1}
                                    alt="Asus"
                                    className="max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">ASUS ROG Zephyrus G14</h2>
                                <p className="text-gray-800">Price: $1,428</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2">
                            <figure className="px-10 pt-10 h-72">
                                <img
                                    src={asus2}
                                    alt="Asus"
                                    className="max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">ASUS ROG Strix G16</h2>
                                <p className="text-gray-800">Price: $1,499</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2">
                            <figure className="px-10 pt-10 h-72">
                                <img
                                    src={asus3}
                                    alt="Asus"
                                    className="max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">ASUS ProArt PA348CGV</h2>
                                <p className="text-gray-800">Price: $649</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2">
                            <figure className="px-10 pt-10 h-72">
                                <img
                                    src={asus4}
                                    alt="Asus"
                                    className="max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">ASUS TUF Gaming F15</h2>
                                <p className="text-gray-800">Price: $1,129</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-white shadow-xl mx-2">
                            <figure className="px-10 pt-10 h-72">
                                <img
                                    src={asus5}
                                    alt="Asus"
                                    className="max-h-60" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#2A3132]">ASUS ROG Zephyrus Duo 16</h2>
                                <p className="text-gray-800">Price: $1,849</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default AsusSlider;
