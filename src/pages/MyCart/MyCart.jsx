import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";

const MyCart = () => {

    const cartProducts = useLoaderData();

    return (
        <div className="bg-gray-50 py-10">
            <div className="flex flex-col gap-5 max-w-4xl mx-auto">
                {
                    cartProducts.map(cart => <Cart cart={cart} key={cart.idx}></Cart>)
                }
            </div>
        </div>
    );
};

export default MyCart;