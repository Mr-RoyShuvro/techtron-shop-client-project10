import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import 'sweetalert2/src/sweetalert2.scss'

const UpdateProduct = () => {

    const product = useLoaderData();
    const { _id, imageURL, name, brand, type, price, rating, description } = product;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const imageURL = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        console.log(imageURL, name, brand, type, price, rating, description);

        const updatedProduct = { imageURL, name, brand, type, price, rating, description };

        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your product has been updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold py-5 text-[#FB6542]">Update a Product</h1>
                </div>
                <div className="card bg-[#f9fdc4] w-full max-w-lg shrink-0 shadow-xl">
                    <form onSubmit={handleUpdateProduct} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#2A3132] font-semibold">Image URL</span>
                            </label>
                            <input defaultValue={imageURL} type="text" name="image" placeholder="Image URL" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#2A3132] font-semibold">Name</span>
                            </label>
                            <input defaultValue={name} type="text" name="name" placeholder="Product Name" className="input input-bordered bg-white" required />
                        </div>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#2A3132] font-semibold">Brand Name</span>
                                </label>
                                <input defaultValue={brand} type="text" name="brand" placeholder="Brand Name" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#2A3132] font-semibold">Product Type</span>
                                </label>
                                <input defaultValue={type} type="text" name="type" placeholder="Product Type" className="input input-bordered bg-white" required />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-[#2A3132] font-semibold">Price</span>
                                </label>
                                <input defaultValue={price} type="text" name="price" placeholder="Product Price" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-[#2A3132] font-semibold">Rating</span>
                                </label>
                                <input defaultValue={rating} type="text" name="rating" placeholder="Rating" className="input input-bordered bg-white" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#2A3132] font-semibold">Description</span>
                            </label>
                            <input defaultValue={description} type="text" name="description" placeholder="Product Description" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className='btn bg-[#FB6542] text-white border-none hover:bg-[#cf5134] text-base font-medium'>Update Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;