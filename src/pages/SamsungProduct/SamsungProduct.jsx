import { useState, useEffect } from "react";
import SamsungSlider from "./SamsungSlider";
import Samsung from "./Samsung";
import { useLoaderData } from "react-router-dom";

const SamsungProduct = () => {
    const [products, setProducts] = useState([]);
    const loadedData = useLoaderData();

    useEffect(() => {
        if (loadedData) {
            const remainingProduct = loadedData.filter(product => product.brand.toLowerCase() === 'samsung');
            setProducts(remainingProduct);
        }
        else{
            alert('No product is available')
        }
    }, [loadedData]);

    return (
        <div>
            <SamsungSlider></SamsungSlider>
            <div className="bg-slate-50 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-2 max-w-6xl mx-auto">
                    {products.map(product => <Samsung product={product} key={product._id}></Samsung>)}
                </div>
            </div>
        </div>
    );
};

export default SamsungProduct;
