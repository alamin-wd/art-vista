import { useContext } from "react";
import { HiMenu } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, LogOut, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        LogOut()
            .then(() => {
                setUser(null);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const menus = (
        <>
            <li className="text-lg font-medium mr-2">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-lg font-medium mr-2">
                <NavLink to="/allItems">All Art & Craft Items</NavLink>
            </li>
            
            {user && (
                <>
                    <li className="text-lg font-medium mr-2">
                        <NavLink to="/addItem">Add Craft Item</NavLink>
                    </li>
                    <li className="text-lg font-medium mr-2">
                        <NavLink to="/myItems">My Art & Craft List</NavLink>
                    </li>
                </>
            )}

        </>
    );

    return (
        <div className="navbar w-11/12 mx-auto bg-[base-100]">
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
                {!user ? (
                    <>
                        <NavLink to="/signIn">
                            <button className="bg-[#6B2B06] hover:bg-[#8E4826] px-4 py-2 text-white rounded-lg">Sign In</button>
                        </NavLink>

                        <NavLink to="/signUp">
                            <button className="bg-[#6B2B06] hover:bg-[#8E4826] px-4 py-2 text-white rounded-lg">Sign Up</button>
                        </NavLink>
                    </>
                ) : (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt="User Avatar" />
                            </div>
                        </label>

                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a>{user.displayName}</a>
                            </li>

                            <li>
                                <a onClick={handleSignOut}>Sign Out</a>
                            </li>
                        </ul>

                    </div>
                )}
            </div>

        </div>
    );
};

export default Navbar;
