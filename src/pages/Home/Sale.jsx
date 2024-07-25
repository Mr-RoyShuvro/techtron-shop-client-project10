import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const Sale = () => {
    return (
        <div>

            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co/X7Xwgrb/a.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center glass">
                    <div className=" flex flex-col md:flex-row gap-5 md:gap-28">
                        <div>
                            <h3 className='text-5xl font-semibold text-[#2d3233]'><span className='text-[#7c3526] font-bold text-6xl'>Hurry! Up To 25% Off </span><br />– Sale Ends Soon!</h3>
                            <Link to='/all'>
                                <button className='btn bg-[#FB6542] text-white border-none hover:bg-[#cf5134] text-base font-medium mt-5'>Shop Now</button>
                            </Link>
                        </div>
                        <Countdown className='text-5xl md:text-7xl font-bold text-[#ffbb00] p-2 md:p-10' date={Date.now() + 10000000} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sale;