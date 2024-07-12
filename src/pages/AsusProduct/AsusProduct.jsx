import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AsusSlider from "./AsusSlider";
import Asus from "./Asus";

const AsusProduct = () => {
    const [products, setProducts] = useState([]);
    const loadedData = useLoaderData();

    useEffect(() => {
        if (loadedData) {
            const remainingProduct = loadedData.filter(product => product.brand.toLowerCase() === 'asus');
            setProducts(remainingProduct);
        }
        else {
            // alert('No product is available')
        }
    }, [loadedData]);

    return (
        <div>
            <AsusSlider></AsusSlider>
            <div className="bg-slate-50 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-2 max-w-6xl mx-auto">
                    {products.map(product => <Asus product={product} key={product._id}></Asus>)}
                </div>
            </div>
        </div>
    );
};

export default AsusProduct;
