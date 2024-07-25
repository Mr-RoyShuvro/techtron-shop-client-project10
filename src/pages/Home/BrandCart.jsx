import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

import { Link } from "react-router-dom";
import { CardActionArea } from '@mui/material';

const BrandCart = () => {

    return (
        <div className="bg-slate-100 pt-20 pb-32">
            <div data-aos="fade-up">
                <h3 className="text-[#FB6542] text-5xl font-semibold text-center pb-5">Explore Top Brands</h3>
                <p className="text-center text-[#2A3132] font-normal text-base">Explore a curated selection of top-tier brands known for quality <br />and innovation in technology and electronics.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto mt-10 px-2">
                <div data-aos="zoom-in">
                    <Link to='/samsung'>
                        <CardActionArea>
                            <div className="card bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-white shadow-xl px-5">
                                <figure className="h-40">
                                    <img className="max-h-28 mt-5 mb-5" src="https://i.ibb.co/8x2wChV/samsung.png" alt="Shoes" />
                                </figure>
                                <div className="pb-5">
                                    <h2 className="card-title justify-center text-[#FB6542] font-bold text-2xl">Samsung</h2>
                                </div>
                            </div>
                        </CardActionArea>
                    </Link>
                </div>
                <div data-aos="zoom-in">
                    <Link to='/apple'>
                        <CardActionArea>
                            <div className="card bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-white shadow-xl">
                                <figure className="h-40">
                                    <img className="max-h-28 mt-5 mb-5" src="https://i.ibb.co/q9ghB34/apple.png" alt="Shoes" />
                                </figure>
                                <div className="pb-5">
                                    <h2 className="card-title justify-center text-[#FB6542] font-bold text-2xl">Apple</h2>
                                </div>
                            </div>
                        </CardActionArea>
                    </Link>
                </div>
                <div data-aos="zoom-in">
                    <Link to='/sony'>
                        <CardActionArea>
                            <div className="card bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-white shadow-xl px-5">
                                <figure className="h-40">
                                    <img className="max-h-28 mt-5 mb-5" src="https://i.ibb.co/gy0QxbC/sony.png" alt="Shoes" />
                                </figure>
                                <div className="pb-5">
                                    <h2 className="card-title justify-center text-[#FB6542] font-bold text-2xl">Sony</h2>
                                </div>
                            </div>
                        </CardActionArea>
                    </Link>
                </div>
                <div data-aos="zoom-in">
                    <Link to='/hp'>
                        <CardActionArea>
                            <div className="card bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-white shadow-xl">
                                <figure className="h-40">
                                    <img className="max-h-28 mt-5 mb-5" src="https://i.ibb.co/GF90mhr/hp.png" alt="Shoes" />
                                </figure>
                                <div className="pb-5">
                                    <h2 className="card-title justify-center text-[#FB6542] font-bold text-2xl">HP</h2>
                                </div>
                            </div>
                        </CardActionArea>
                    </Link>
                </div>
                <div data-aos="zoom-in">
                    <Link to='/google'>
                        <CardActionArea>
                            <div className="card bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-white shadow-xl px-10">
                                <figure className="h-40">
                                    <img className="max-h-28 mt-5 mb-5" src="https://i.ibb.co/yBPKg5c/google.png" alt="Shoes" />
                                </figure>
                                <div className="pb-5">
                                    <h2 className="card-title justify-center text-[#FB6542] font-bold text-2xl">Google</h2>
                                </div>
                            </div>
                        </CardActionArea>
                    </Link>
                </div>
                <div data-aos="zoom-in">
                    <Link to='/asus'>
                        <CardActionArea>
                            <div className="card bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-white shadow-xl px-10">
                                <figure className="h-40">
                                    <img className="max-h-28 mt-5 mb-5" src="https://i.ibb.co/RpHJX3F/asus.png" alt="Shoes" />
                                </figure>
                                <div className="pb-5">
                                    <h2 className="card-title justify-center text-[#FB6542] font-bold text-2xl">Asus</h2>
                                </div>
                            </div>
                        </CardActionArea>
                    </Link>
                </div>
                <div data-aos="zoom-in">
                    <Link to='/microsoft'>
                        <CardActionArea>
                            <div className="card bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-white shadow-xl px-10">
                                <figure className="h-40">
                                    <img className="max-h-28 mt-5 mb-5" src="https://i.ibb.co/hFf3r1B/microsoft.pngg" alt="Shoes" />
                                </figure>
                                <div className="pb-5">
                                    <h2 className="card-title justify-center text-[#FB6542] font-bold text-2xl">Microsoft</h2>
                                </div>
                            </div>
                        </CardActionArea>
                    </Link>
                </div>
                <div data-aos="zoom-in">
                    <Link to='/lenovo'>
                        <CardActionArea>
                            <div className="card bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-white shadow-xl px-10">
                                <figure className="h-40">
                                    <img className="max-h-28 mt-5 mb-5" src="https://i.ibb.co/PZDxCfq/lenovo.png" alt="Shoes" />
                                </figure>
                                <div className="pb-5">
                                    <h2 className="card-title justify-center text-[#FB6542] font-bold text-2xl">Lenovo</h2>
                                </div>
                            </div>
                        </CardActionArea>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BrandCart;