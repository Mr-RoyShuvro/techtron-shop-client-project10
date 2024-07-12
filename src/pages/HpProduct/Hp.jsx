// import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Hp = ({ product }) => {

    const { _id, imageURL, name, brand, type, price, rating } = product;

    return (
        <div className="card bg-white shadow-xl">
            <figure className="h-72 md:h-60">
                <img className='max-h-48' src={imageURL} alt="Loading" />
            </figure>
            <div className="card-body">
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

                <Stack direction="row" spacing={2}>
                    <Link to={`/product/${_id}`}>
                        <Button variant="contained" color='warning'>Details</Button>
                    </Link>
                    <Link to={`/update/${_id}`}>
                        <Button variant="outlined" color='warning'>Update</Button>
                    </Link>
                </Stack>
            </div>
        </div>
    );
};

export default Hp;

Hp.propTypes = {
    product: PropTypes.array,
}