import { useState, useEffect } from "react";
import SamsungSlider from "./SamsungSlider";
import Samsung from "./Samsung";

const SamsungProduct = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(allProduct => {
                const remainingProduct = allProduct.filter(product => product.brand == 'Samsung' || 'samsung')
                setProduct(remainingProduct)
                console.log(remainingProduct)
            })
    }, [])

    return (
        <div>
            <SamsungSlider></SamsungSlider>
            <div className="bg-slate-50 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-2 max-w-6xl mx-auto">
                    {products.map(product => <Samsung product={product} key={product.idx}></Samsung>)}
                </div>
            </div>
        </div>
    );
};

export default SamsungProduct;
