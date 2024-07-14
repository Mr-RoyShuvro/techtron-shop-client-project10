import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const LogIn = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);

                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .then(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);

            // navigate after login
            navigate(location?.state ? location.state : '/')
        })
        .then(error=>{
            console.error(error);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col gap-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-[#FB6542]">Login now!</h1>
                </div>
                <div className="card bg-yellow-100 w-full max-w-lg shrink-0 shadow-2xl px-5 py-5">
                    <form onSubmit={handleLogIn} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base text-black font-semibold">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered bg-slate-50 text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base text-black font-semibold">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" className="input input-bordered bg-slate-50 text-black" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-black">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className='btn bg-[#FB6542] text-white border-none hover:bg-[#cf5134] text-base font-medium'>Login</button>
                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn} className='btn bg-white text-[#FB6542] border-2 border-[#FB6542] hover:border-none hover:text-white hover:bg-[#cf5134] text-base font-medium mt-5'>Login With Google</button>
                    <h3 className="text-black font-medium pt-5">Do not have an account? Please <Link to='/register' className="text-blue-500 font-bold">Register</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default LogIn;