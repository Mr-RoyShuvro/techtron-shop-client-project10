import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.first.value;
        const LastName = form.last.value;
        const email = form.email.value;
        const password = form.password.value;
        const address = form.address.value;
        const imageURL = form.image.value;
        console.log(firstName, LastName, email, password, address, imageURL);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold py-5 text-[#FB6542]">Please Register</h1>
                </div>
                <div className="card bg-[#f9fdc4] w-full max-w-lg shrink-0 shadow-xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="flex gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#2A3132] font-semibold">First Name</span>
                                </label>
                                <input type="text" name="first" placeholder="First Name" className="input input-bordered bg-white text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#2A3132] font-semibold">Last Name</span>
                                </label>
                                <input type="text" name="last" placeholder="Last Name" className="input input-bordered bg-white text-black" required />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-[#2A3132] font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered bg-white text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-[#2A3132] font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered bg-white text-black" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#2A3132] font-semibold">Address</span>
                            </label>
                            <input type="text" name="address" placeholder="Address" className="input input-bordered bg-white text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#2A3132] font-semibold">Image URL</span>
                            </label>
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered bg-white text-black" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className='btn bg-[#FB6542] text-white border-none hover:bg-[#cf5134] text-base font-medium'>Register</button>
                        </div>
                        <h3 className="text-black font-medium pt-5 pl-2">Already have an account? Please <Link to='/login' className="text-blue-500 font-bold">Login</Link></h3>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;