import { Button, Rating, Stack } from "@mui/material";
import { Link } from "react-router-dom";


const Cart = ({ cart }) => {

    const { _id, imageURL, name, brand, type, price, rating } = cart;

    return (
        <div className=" shadow-xl flex gap-10 pr-10 items-center bg-orange-100 rounded-lg">
            <figure className="h-72 md:h-60">
                <img className="max-w-xs" src={imageURL} alt="Loading" />
            </figure>
            <div className="flex-1">
                <h2 className="card-title text-[#2A3132]">{name}</h2>
                <p className='text-gray-800'>Brand Name: {brand}</p>
                <div className="flex">
                    <p className='text-gray-800'>Type: {type}</p>
                    <p className='text-gray-800'>Price: ${price}</p>
                </div>

                {/* Rating */}
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                </Stack>
            </div>
            <div>
                <Stack className="" direction="column" spacing={2}>
                    <Link to={`/product/${_id}`}>
                        <Button className="w-full" variant="contained" color='warning'>Phone Details</Button>
                    </Link>
                    <Button variant="outlined" color='warning'>Remove From Cart</Button>
                </Stack>
            </div>
        </div>
    );
};

export default Cart;