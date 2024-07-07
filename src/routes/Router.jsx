import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import AddProduct from "../pages/AddProduct/AddProduct";
import SamsungProduct from "../pages/SamsungProduct/SamsungProduct";
import AppleProduct from "../pages/AppleProduct/AppleProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/add',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/samsung',
                element: <SamsungProduct></SamsungProduct>
            },
            {
                path: '/apple',
                element: <AppleProduct></AppleProduct>
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/mycart',
                element: <MyCart></MyCart>,
                loader: () => fetch('http://localhost:5000/cart')
            }
        ]
    }
]);

export default router;