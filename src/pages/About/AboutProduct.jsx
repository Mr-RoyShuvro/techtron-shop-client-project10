

const AboutProduct = () => {
    return (
        <div className="bg-gray-100 pb-10">
            <div className=" pb-5 pt-20">
                <h3 className="text-[#FB6542] text-5xl font-semibold text-center pb-5">Why Choose Our Products</h3>
                <p className="text-center text-[#2A3132] font-normal text-base max-w-4xl mx-auto">Our products undergo strict quality control for exceptional performance. We guarantee authenticity, sourcing directly from reliable manufacturers. Benefit from our free service and support, ensuring seamless usage.</p>
            </div>
            <div className="hero pt-10 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://i.ibb.co/ZSQmc2B/oppo-Vc-Vr-NIob-Ark-unsplash.jpg"
                        className="max-w-2xl shadow-2xl" />
                    <div className="bg-white -translate-x-20 p-5 rounded-lg shadow-xl w-2/5 card-container group transform transition-transform duration-300 hover:scale-75 hover:bg-gradient-to-r hover:from-[#834a24] hover:to-[#4b2a0f] z-20">
                        <h1 className="text-3xl font-bold text-[#2d3233] mb-2 transition-colors duration-300 group-hover:text-white">Quality Control</h1>
                        <p className="py-6 text-gray-700 transition-colors duration-300 group-hover:text-white">
                        Our stringent quality control process ensures that each product meets the highest standards of performance 
                        and reliability. We meticulously test every item to guarantee you receive the best.
                        </p>
                    </div>
                </div>
            </div>
            {/* 2nd Card */}
            <div className="hero pt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co/8js1LZh/aa.png"
                        className="max-w-2xl shadow-2xl" />
                    <div className="bg-white translate-x-20 p-5 rounded-lg shadow-xl w-2/5 card-container group transform transition-transform duration-300 hover:scale-75 hover:bg-gradient-to-r hover:from-[#834a24] hover:to-[#4b2a0f] z-20">
                        <h1 className="text-3xl font-bold text-[#2d3233] mb-2 transition-colors duration-300 group-hover:text-white">Original Product</h1>
                        <p className="py-6 text-gray-700 transition-colors duration-300 group-hover:text-white">
                        Shop with confidence knowing that every product is 100% genuine. We source directly from trusted manufacturers, 
                        ensuring authenticity and peace of mind with each purchase.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero pt-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://i.ibb.co/4jm0pXG/bb.png"
                        className="max-w-2xl shadow-2xl" />
                    <div className="bg-white -translate-x-20 p-5 rounded-lg shadow-xl w-2/5 card-container group transform transition-transform duration-300 hover:scale-75 hover:bg-gradient-to-r hover:from-[#834a24] hover:to-[#4b2a0f] z-20">
                        <h1 className="text-3xl font-bold text-[#2d3233] mb-2 transition-colors duration-300 group-hover:text-white">Free Service</h1>
                        <p className="py-6 text-gray-700 transition-colors duration-300 group-hover:text-white">
                        Benefit from our complimentary service and support. We offer free assistance to help you with installation, 
                        troubleshooting, and maintenance, ensuring you have a seamless experience.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero pt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co/frthyJs/cc.png"
                        className="max-w-2xl shadow-2xl" />
                    <div className="bg-white translate-x-20 p-5 rounded-lg shadow-xl w-2/5 card-container group transform transition-transform duration-300 hover:scale-75 hover:bg-gradient-to-r hover:from-[#834a24] hover:to-[#4b2a0f] z-20">
                        <h1 className="text-3xl font-bold text-[#2d3233] mb-2 transition-colors duration-300 group-hover:text-white">Fast Delivery</h1>
                        <p className="py-6 text-gray-700 transition-colors duration-300 group-hover:text-white ">
                        Experience the convenience of our fast delivery service. We prioritize quick and reliable shipping, ensuring 
                        your order reaches you promptly and safely, no matter where you are.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutProduct;