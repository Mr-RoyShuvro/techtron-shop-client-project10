import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = e => {
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

        const newProduct = { imageURL, name, brand, type, price, rating, description };

        Swal.fire({
            title: "Are you sure to add?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Add this product!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch('http://localhost:5000/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newProduct)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Added!",
                            text: "Your product has been added successfully.",
                            icon: "success"
                        });
                    })
            }
        });
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold py-5 text-[#FB6542]">Add a Product</h1>
                </div>
                <div className="card bg-[#f9fdc4] w-full max-w-lg shrink-0 shadow-xl">
                    <form onSubmit={handleAddProduct} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#2A3132] font-semibold">Image URL</span>
                            </label>
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#2A3132] font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered bg-white" required />
                        </div>
                        <div className="flex gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#2A3132] font-semibold">Brand Name</span>
                                </label>
                                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#2A3132] font-semibold">Product Type</span>
                                </label>
                                <input type="text" name="type" placeholder="Product Type" className="input input-bordered bg-white" required />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-[#2A3132] font-semibold">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Product Price" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-[#2A3132] font-semibold">Rating</span>
                                </label>
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered bg-white" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#2A3132] font-semibold">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Product Description" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className='btn bg-[#FB6542] text-white border-none hover:bg-[#cf5134] text-base font-medium'>Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;