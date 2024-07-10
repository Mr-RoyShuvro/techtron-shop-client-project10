import {Rating, Stack } from "@mui/material";
import { useLoaderData } from "react-router-dom";

const MyCartProductDetails = () => {
    const loadedProduct = useLoaderData();
    const { imageURL, name, brand, type, price, rating, description } = loadedProduct;


    return (
        <div className='bg-slate-50'>
            <div className="py-10 flex flex-col md:flex-row gap-10 max-w-6xl mx-auto ">
                <div className="card bg-white shadow-xl max-w-xl mx-auto px-10">
                    <figure>
                        <img src={imageURL} alt={name} /> {/* Ensure 'alt' attribute has meaningful content */}
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#2A3132]">{name}</h2>
                        <p className='text-gray-800'>Brand Name: {brand}</p>
                        <div className="flex justify-between">
                            <p className='text-gray-800'>Type: {type}</p>
                            <p className='text-gray-800'>Price: ${price}</p>
                        </div>
                        {/* Rating */}
                        <Stack spacing={1}>
                            <Rating name="read-only" value={rating} precision={0.5} readOnly />
                        </Stack>
                    </div>
                </div>
                <div className="max-w-lg mx-auto bg-yellow-100 ">
                    <h3 className='px-5 py-2 text-lg font-bold text-[#2A3132]'>Details of {name}</h3>
                    <h3 className='px-5 pb-10 text-gray-800'>{description}</h3>
                </div>
            </div>
        </div>
    );
};

export default MyCartProductDetails;
