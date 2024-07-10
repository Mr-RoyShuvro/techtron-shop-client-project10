import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

const MyCart = () => {

    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);

    return (
        <div className="bg-gray-50 py-10">
            <div className="flex flex-col gap-5 max-w-4xl mx-auto">
                {
                    products.map(cart => <Cart cart={cart} setProducts={setProducts} products={products} key={cart._id}></Cart>)
                }
            </div>
        </div>
    );
};

export default MyCart;