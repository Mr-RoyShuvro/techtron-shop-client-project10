import { Button, Rating, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const Cart = ({ cart, setProducts, products }) => {

    const { _id, imageURL, name, brand, type, price, rating } = cart;

    const handleRemoveCart = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Removed!",
                                text: "Your cart has been removed.",
                                icon: "success"
                            });
                            const remaining = products.filter(product => product._id !== id)
                            setProducts(remaining);
                        }
                    })
            }
        });
    }

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
                    <Link to={`/cartproduct/${_id}`}>
                        <Button className="w-full" variant="contained" color='warning'>Phone Details</Button>
                    </Link>
                    <Button onClick={() => handleRemoveCart(_id)} variant="outlined" color='warning'>Remove From Cart</Button>
                </Stack>
            </div>
        </div>
    );
};

export default Cart;

Cart.propTypes ={
    cart: PropTypes.array,
    setProducts: PropTypes.func,
    products: PropTypes.array,
}