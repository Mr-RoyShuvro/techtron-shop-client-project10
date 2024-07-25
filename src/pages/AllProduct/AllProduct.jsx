import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const AllProduct = () => {
    const loadedData = useLoaderData();

    return (
        <div>
            <div className="bg-slate-50 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-3 max-w-6xl mx-auto">
                    {loadedData.map(product => <SingleProduct product={product} key={product._id}></SingleProduct>)}
                </div>
            </div>
        </div>
    );
};

export default AllProduct;
