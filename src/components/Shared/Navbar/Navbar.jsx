import { useContext, useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    // const { user, LogOut, setUser } = useContext(AuthContext);
    // const navigate = useNavigate();
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsNavbarFixed(true);
            } else {
                setIsNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // const handleSignOut = () => {
    //     LogOut()
    //         .then(() => {
    //             navigate('/');
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }

    const menus = (
        <>
            <li className="text-lg font-medium mr-2">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-lg font-medium mr-2">
                <NavLink to="/allItems">All Art & Craft Items</NavLink>
            </li>

            <li className="text-lg font-medium mr-2">
                <NavLink to="/addItem">Add Craft Item</NavLink>
            </li>
            <li className="text-lg font-medium mr-2">
                <NavLink to="/myItems">My Art & Craft List</NavLink>
            </li>

        </>
    );

    return (
        <div
            className={`navbar w-full px-14 mx-auto bg-base-100 
        ${isNavbarFixed ? 'fixed top-0 left-0 right-0 z-50 bg-base-200' : ''}`}>

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <HiMenu />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menus}
                    </ul>
                </div>
                <Link to={"/"}>
                    <button className="text-4xl font-bold">Art Vista</button>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menus}
                </ul>
            </div>

            {/* Navbar End */}

            <div className="navbar-end gap-4">
            <NavLink to="/signIn">
                            <button className="bg-[#6B2B06] hover:bg-[#8E4826] px-4 py-2 text-white rounded-lg">Sign In</button>
                        </NavLink>

                        <NavLink to="/signUp">
                            <button className="bg-[#6B2B06] hover:bg-[#8E4826] px-4 py-2 text-white rounded-lg">Sign Up</button>
                        </NavLink>
                        {/* <a onClick={handleSignOut}>Sign Out</a> */}
            </div>

        </div>
    );
};

export default Navbar;
