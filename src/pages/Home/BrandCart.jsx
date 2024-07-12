import { Link } from "react-router-dom";


const BrandCart = () => {

    return (
        <div className="grid grid-cols-4 gap-5 max-w-6xl mx-auto my-20">
            <Link to='/samsung'>
                <div className="card bg-gradient-to-r from-[#ff9a1f] to-[#fcc485] hover:bg-gradient-to-r hover:from-[#ec9939] hover:to-[#e4870e] h-64 shadow-xl ">
                    <figure>
                        <img className="h-12 mt-20 mb-5" src="https://i.ibb.co/8x2wChV/samsung.png" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">Samsung</h2>
                    </div>
                </div>
            </Link>
            <Link to='/apple'>
                <div className="card bg-gradient-to-r from-[#ff9a1f] to-[#fcc485] hover:bg-gradient-to-r hover:from-[#ec9939] hover:to-[#e4870e] h-64 shadow-xl ">
                    <figure>
                        <img className="h-12 mt-20 mb-5" src="https://i.ibb.co/q9ghB34/apple.png" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">Apple</h2>
                    </div>
                </div>
            </Link>
            <Link to='/sony'>
                <div className="card bg-gradient-to-r from-[#ff9a1f] to-[#fcc485] hover:bg-gradient-to-r hover:from-[#ec9939] hover:to-[#e4870e] h-64 shadow-xl ">
                    <figure>
                        <img className="h-12 mt-20 mb-5" src="https://i.ibb.co/gy0QxbC/sony.png" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">Sony</h2>
                    </div>
                </div>
            </Link>
            <Link to='/hp'>
                <div className="card bg-gradient-to-r from-[#ff9a1f] to-[#fcc485] hover:bg-gradient-to-r hover:from-[#ec9939] hover:to-[#e4870e] h-64 shadow-xl ">
                    <figure>
                        <img className="h-12 mt-20 mb-5" src="https://i.ibb.co/GF90mhr/hp.png" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">HP</h2>
                    </div>
                </div>
            </Link>
            <Link to='/google'>
                <div className="card bg-gradient-to-r from-[#ff9a1f] to-[#fcc485] hover:bg-gradient-to-r hover:from-[#ec9939] hover:to-[#e4870e] h-64 shadow-xl ">
                    <figure>
                        <img className="h-12 mt-20 mb-5" src="https://i.ibb.co/yBPKg5c/google.png" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">Google</h2>
                    </div>
                </div>
            </Link>
            <Link to='/asus'>
                <div className="card bg-gradient-to-r from-[#ff9a1f] to-[#fcc485] hover:bg-gradient-to-r hover:from-[#ec9939] hover:to-[#e4870e] h-64 shadow-xl ">
                    <figure>
                        <img className="h-12 mt-20 mb-5" src="https://i.ibb.co/RpHJX3F/asus.png" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">Asus</h2>
                    </div>
                </div>
            </Link>
            <Link to='/microsoft'>
                <div className="card bg-gradient-to-r from-[#ff9a1f] to-[#fcc485] hover:bg-gradient-to-r hover:from-[#ec9939] hover:to-[#e4870e] h-64 shadow-xl ">
                    <figure>
                        <img className="h-12 mt-20 mb-5" src="https://i.ibb.co/hFf3r1B/microsoft.pngg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">Microsoft</h2>
                    </div>
                </div>
            </Link>
            <div className="card bg-gradient-to-r from-[#ff9a1f] to-[#fcc485] hover:bg-gradient-to-r hover:from-[#ec9939] hover:to-[#e4870e] h-64 shadow-xl ">
                <figure>
                    <img className="h-12 mt-20 mb-5" src="https://i.ibb.co/PZDxCfq/lenovo.png" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">Lenovo</h2>
                </div>
            </div>
        </div>
    );
};

export default BrandCart;