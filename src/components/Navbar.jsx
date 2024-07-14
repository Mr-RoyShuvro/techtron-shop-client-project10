import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo3.png'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <NavLink to='/'><li><button className="font-medium text-[#2A3132]">Home</button></li></NavLink>
        <NavLink to='/add'><li><button className="font-medium text-[#2A3132]">Add Product</button></li></NavLink>
        <NavLink to='/mycart'><li><button className="font-medium text-[#2A3132]">My Cart</button></li></NavLink>
    </>

    const handleLogOut = () => {
        logOut()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })
    }

    return (
        <div className="navbar bg-[#97761c]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className="w-44 h-12" src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button className="btn btn-error text-white" onClick={handleLogOut}>Logout</button>
                        :
                        <Link to='/login'>
                            <button className="btn btn-success text-white">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;