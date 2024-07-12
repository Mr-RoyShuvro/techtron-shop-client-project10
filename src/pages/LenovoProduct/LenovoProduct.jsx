import { Link } from 'react-router-dom';
import background from '../../assets/bg2.png'

const LenovoProduct = () => {
    return (
        <div className='min-h-screen' style={{ backgroundImage: `url(${background})` }}>
            <div className='flex flex-col items-center py-40'>
                <h3 className='text-3xl font-semibold text-[#ff5b36] pb-6'>Product is not available</h3>
                <Link to='/'>
                    <button className='btn bg-[#FB6542] text-white border-none hover:bg-[#cf5134] text-base font-medium'>Go Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default LenovoProduct;