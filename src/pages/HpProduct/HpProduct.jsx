import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import HpSlider from "./HpSlider";
import Hp from "./Hp";

const HpProduct = () => {
    const [products, setProducts] = useState([]);
    const loadedData = useLoaderData();

    useEffect(() => {
        if (loadedData) {
            const remainingProduct = loadedData.filter(product => product.brand.toLowerCase() === 'hp');
            setProducts(remainingProduct);
        }
        else {
            // alert('No product is available')
        }
    }, [loadedData]);

    return (
        <div>
            <HpSlider></HpSlider>
            <div className="bg-slate-50 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-2 max-w-6xl mx-auto">
                    {products.map(product => <Hp product={product} key={product._id}></Hp>)}
                </div>
            </div>
        </div>
    );
};

export default HpProduct;
