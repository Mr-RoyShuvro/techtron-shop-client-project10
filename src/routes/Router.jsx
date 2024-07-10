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
                element: <SamsungProduct></SamsungProduct>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/apple',
                element: <AppleProduct></AppleProduct>
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
            }
        ]
    }
]);

export default router;