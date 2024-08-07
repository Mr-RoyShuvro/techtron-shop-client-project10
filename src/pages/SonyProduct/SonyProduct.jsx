import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SonySlider from "./SonySlider";
import Sony from "./Sony";

const SonyProduct = () => {
    const [products, setProducts] = useState([]);
    const loadedData = useLoaderData();

    useEffect(() => {
        if (loadedData) {
            const remainingProduct = loadedData.filter(product => product.brand.toLowerCase() === 'sony');
            setProducts(remainingProduct);
        }
        else {
            alert('No product is available')
        }
    }, [loadedData]);

    return (
        <div>
            <SonySlider></SonySlider>
            <div className="bg-slate-50 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-2 max-w-6xl mx-auto">
                    {products.map(product => <Sony product={product} key={product._id}></Sony>)}
                </div>
            </div>
        </div>
    );
};

export default SonyProduct;
