import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import AddProduct from "../pages/AddProduct/AddProduct";
import SamsungProduct from "../pages/SamsungProduct/SamsungProduct";
import AppleProduct from "../pages/AppleProduct/AppleProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import MyCartProductDetails from "../pages/MyCart/MyCartProductDetails";
import SonyProduct from "../pages/SonyProduct/SonyProduct";
import HpProduct from "../pages/HpProduct/HpProduct";
import GoogleProduct from "../pages/GoogleProduct/GoogleProduct";
import AsusProduct from "../pages/AsusProduct/AsusProduct";
import MicrosoftProduct from "../pages/MicrosoftProduct/MicrosoftProduct";
import LenovoProduct from "../pages/LenovoProduct/LenovoProduct";
import LogIn from "../Authentication/LogIn";
import Register from "../Authentication/Register";
import PrivateRoute from "./PrivateRoute";

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
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/samsung',
                element: <SamsungProduct></SamsungProduct>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/apple',
                element: <AppleProduct></AppleProduct>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/sony',
                element: <SonyProduct></SonyProduct>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/hp',
                element: <HpProduct></HpProduct>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/google',
                element: <GoogleProduct></GoogleProduct>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/asus',
                element: <AsusProduct></AsusProduct>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/microsoft',
                element: <MicrosoftProduct></MicrosoftProduct>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/lenovo',
                element: <LenovoProduct></LenovoProduct>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/update/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`)
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            /* for my cart product details */
            {
                path: '/cartproduct/:id',
                element: <MyCartProductDetails></MyCartProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/mycart',
                element: <MyCart></MyCart>,
                loader: () => fetch('http://localhost:5000/cart')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            }
        ]
    }
]);

export default router;